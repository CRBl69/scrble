import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Case } from '../case';
import { Letter } from '../letter';
import { environment } from 'src/environments/environment';
import { WsMessage } from '../ws-message';

@Component({
  selector: 'app-scrabble',
  templateUrl: './scrabble.component.html',
  styleUrls: ['./scrabble.component.scss']
})
export class ScrabbleComponent {
  map: Case[][] = [];
  values = new Map<string, number>();
  lettersOwned: Letter[] = [];
  selectedLetter: { letter: Letter, player: number } | null = null;
  player: number = 0;
  casesPut: { c: Case, x: number, y: number }[] = [];
  scores: { name: string, score: number }[] = [];
  oldScores: { name: string, score: number }[] = [];
  swapLeft = 7;
  roomName = '';
  ws: WebSocket;
  gameState = false;
  selfName = localStorage.getItem('username') ?? '';
  lettersLeft = 0;
  actualPlayer = '';
  error = '';

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    ) {
      this.ws = new WebSocket(`ws://${environment.domain}:6942/ws`);
      this.ws.onmessage = this.handleWs;
      this.ws.onopen = () => {
        this.route.paramMap.subscribe(res => {
          this.roomName = res.get('name')!;
          let roomExists = false;
          fetch(`http://${environment.domain}:6942/rooms`).then(res => res.json()).then(res => {
            res.forEach((r: string) => {
              if(r == this.roomName) roomExists = true;
            });
            if(!roomExists) this.error = 'Room doesn\'t exist';
          })
          this.sendMsg({
            type: 'join',
            room: this.roomName,
            data: { playerName: localStorage.getItem('username') }
          })
        })
      }
    }

  selectLetter(letter: Letter, player: number) {
    if (this.player == player) {
      this.selectedLetter?.letter.unselect();
      this.selectedLetter = { letter, player };
      letter.select();
    }
  }

  caseClicked(x: number, y: number, c: Case) {
    if (this.selectedLetter != null) {
      this.selectedLetter.letter.unselect();
      let letterIndex = this.lettersOwned.indexOf(this.selectedLetter.letter);
      this.sendMsg({
        type: 'caseClicked',
        room: this.roomName,
        data: {
          letterIndex,
          x,
          y
        }
      });
      this.selectedLetter = null;
    }
  }

  done() {
    this.sendMsg({
      type: 'done',
      room: this.roomName,
      data: null
    });
  }

  swap() {
    if (this.selectedLetter != null) {
      let letterIndex = this.lettersOwned.indexOf(this.selectedLetter.letter);
      this.sendMsg({
        type: 'swap',
        room: this.roomName,
        data: letterIndex
      });
      this.selectedLetter = null;
    }
  }

  reset() {
    this.sendMsg({
      type: 'reset',
      room: this.roomName,
      data: null
    });
  }

  start() {
    this.sendMsg({
      type: 'start',
      room: this.roomName,
      data: null
    });
  }

  handleWs = (ev: MessageEvent) => {
    try {
      let obj: WsMessage = JSON.parse(ev.data);
      switch (obj.type) {
        case 'update':
          this.gameState = obj.data.started;
          this.lettersOwned = obj.data.letters.map((letter: any) => new Letter(letter.letter, letter.amount));
          this.oldScores = this.scores.map(score => {
            let newScore = obj.data.scores.find((sc: any) => sc.name == score.name)!;
            let oldScore = this.oldScores.find(o => o.name == score.name)!;
            if(oldScore === undefined) return score;
            if(score.score == newScore.score) return oldScore;
            return score;
          });
          this.scores = obj.data.scores;
          this.map = obj.data.map.map((row: any) => row.map((c: any) => new Case('normal').fromObject(c)));
          this.lettersLeft = obj.data.left;
          this.actualPlayer = obj.data.actualPlayer;
          break;
        case 'start':
          this.gameState = true;
          this.lettersOwned = obj.data.map((letter: any) => new Letter(letter.letter, letter.amount));
          break;
        case 'turn':
          this.actualPlayer = this.selfName;
          break;
        case 'end':
          alert('The end !');
          break;
      }
    } catch (e) {
      console.error(ev.data, e);
    }
  }

  getSelfScore() {
    let x = this.scores.find(s => s.name == this.selfName)?.score;
    return x;
  }

  sendMsg(msg: WsMessage) {
    this.ws.send(JSON.stringify(msg));
  }

  getPointsDiff(name: string): string {
    let score = this.scores.find(p => p.name == name);
    let oldScore = this.oldScores.find(p => p.name == name);
    if(score != undefined && oldScore != undefined) {
      return `+${score.score - oldScore.score}`;
    }
    return '';
  }

  getUsername(){
    this.selfName = localStorage.getItem('username') ?? '';
    return this.selfName;
  }
}
