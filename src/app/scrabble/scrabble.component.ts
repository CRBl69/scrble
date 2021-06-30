import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnDestroy } from '@angular/core';
import { Case } from '../case';
import { Letter } from '../letter';
import { environment } from 'src/environments/environment';
import { WsMessage } from '../ws-message';

@Component({
  selector: 'app-scrabble',
  templateUrl: './scrabble.component.html',
  styleUrls: ['./scrabble.component.scss']
})
export class ScrabbleComponent implements OnDestroy {
  @Input() roomName = '';
  map: Case[][] = [];
  lettersOwned: Letter[] = [];
  selectedLetter: Letter | null = null;
  scores: { name: string, score: number }[] = [];
  ws: WebSocket;
  gameStarted = false;
  username = localStorage.getItem('username') ?? '';
  lettersLeft = 0;
  actualPlayer = '';
  error = '';

  constructor() {
    this.ws = new WebSocket(`ws://${environment.domain}:6942/ws`);
    this.ws.onmessage = this.handleWs;
    this.ws.onopen = () => {
      this.sendMsg({
        type: 'join',
        room: this.roomName,
        data: { playerName: this.username }
      })
    }
  }

  ngOnDestroy() {
    this.ws.close();
  }

  selectLetter(letter: Letter) {
    this.selectedLetter?.unselect();
    this.selectedLetter = letter;
    letter.select();
  }

  caseClicked(x: number, y: number) {
    if (this.selectedLetter != null) {
      this.selectedLetter.unselect();
      let letterIndex = this.lettersOwned.indexOf(this.selectedLetter);
      this.sendMsg({
        type: 'caseClicked',
        room: this.roomName,
        data: { letterIndex, x, y }
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
      this.selectedLetter.unselect();
      let letterIndex = this.lettersOwned.indexOf(this.selectedLetter);
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
          this.gameStarted = obj.data.started;
          this.lettersOwned = obj.data.letters.map((letter: any) => new Letter(letter.letter, letter.amount));
          this.scores = obj.data.scores;
          this.map = obj.data.map.map((row: any) => row.map((c: any) => Case.fromObject(c)));
          this.lettersLeft = obj.data.left;
          this.actualPlayer = obj.data.actualPlayer;
          break;
        case 'start':
          this.gameStarted = true;
          this.lettersOwned = obj.data.map((letter: any) => new Letter(letter.letter, letter.amount));
          break;
        case 'turn':
          this.actualPlayer = this.username;
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
    let x = this.scores.find(s => s.name == this.username)?.score;
    return x;
  }

  sendMsg(msg: WsMessage) {
    this.ws.send(JSON.stringify(msg));
  }
}
