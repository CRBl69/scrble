import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Case } from '../case';
import { Letter } from '../letter';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-scrabble',
  templateUrl: './scrabble.component.html',
  styleUrls: ['./scrabble.component.scss']
})
export class ScrabbleComponent {
  map: Case[][] = [];
  values = new Map<string, number>();
  lettersOwned: Letter[] = [];
  selectedLetter: {letter: Letter, player: number} | null = null;
  player: number = 0;
  casesPut: {c: Case, x: number, y: number}[] = [];
  scores: {name: string, score: number}[] = [];
  swapLeft = 7;
  roomName = '';
  ws: WebSocket;
  gameState = false;
  selfName = localStorage.getItem('username') ?? 'username not found';
  lettersLeft = 0;
  actualPlayer = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.ws = new WebSocket(`ws://${environment.domain}:6942/ws`);
    this.ws.onmessage = this.handleWs;
    this.ws.onopen = () => {
      this.route.paramMap.subscribe(res => {
        this.roomName = res.get('name')!;
        this.ws.send(JSON.stringify({
          type: 'join',
          room: this.roomName,
          data: {playerName: localStorage.getItem('username')}
        }))
      })
    }
  }

  selectLetter(letter: Letter, player: number) {
    if(this.player == player) {
      this.selectedLetter?.letter.unselect();
      this.selectedLetter = {letter, player};
      letter.select();
    }
  }

  caseClicked(x: number, y: number, c: Case) {
    if(this.selectedLetter != null) {
      this.selectedLetter.letter.unselect();
      let letterIndex = this.lettersOwned.indexOf(this.selectedLetter.letter);
      this.ws.send(JSON.stringify({
        type: 'caseClicked',
        room: this.roomName,
        data: {
          letterIndex,
          x,
          y
        }
      }));
      this.selectedLetter = null;
    }
  }

  done() {
    this.ws.send(JSON.stringify({
      type: 'done',
      room: this.roomName,
      data: null
    }));
  }

  swap() {
    if(this.selectedLetter != null) {
      let letterIndex = this.lettersOwned.indexOf(this.selectedLetter.letter);
      this.ws.send(JSON.stringify({
        type: 'swap',
        room: this.roomName,
        data: letterIndex
      }));
      this.selectedLetter = null;
    }
  }

  reset() {
    this.ws.send(JSON.stringify({
      type: 'reset',
      room: this.roomName,
      data: null
    }));
  }

  start(){
    this.ws.send(JSON.stringify({
      type: 'start',
      room: this.roomName,
      data: null
    }))
  }

  handleWs = (ev: MessageEvent) => {
    try {
      let obj = JSON.parse(ev.data);
      console.log(obj);
      switch(obj.type) {
        case 'update':
          this.gameState = obj.data.started;
          this.lettersOwned = obj.data.letters.map((letter: any) => new Letter(letter.letter, letter.amount));
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
    } catch(e) {
      console.error(ev.data, e);
    }
  }

  getSelfScore() {
    let x = this.scores.find(s => s.name == this.selfName)?.score;
    return x;
  }
}
