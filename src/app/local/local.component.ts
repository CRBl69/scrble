import { Router, ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Case } from '../case';
import { Letter } from '../letter';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent {
  map = [
    [
      new Case("tripleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleWord"),
    ],
    [
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
    ],
    [
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
    ],
    [
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
    ],
    [
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
    ],
    [
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
    ],
    [
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
    ],
    [
      new Case('tripleWord'),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("starting"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case('tripleWord'),
    ],
    [
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
    ],
    [
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
    ],
    [
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
    ],
    [
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
    ],
    [
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
    ],
    [
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleWord"),
      new Case("normal"),
    ],
    [
      new Case("tripleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleWord"),
      new Case("normal"),
      new Case("normal"),
      new Case("normal"),
      new Case("doubleLetter"),
      new Case("normal"),
      new Case("normal"),
      new Case("tripleWord"),
    ],
  ];
  letters = [
    "a","a","a","a","a","a","a","a","a",
    "b","b",
    "c","c",
    "d","d","d",
    "e","e","e","e","e","e","e","e","e","e","e","e","e","e","e",
    "f","f",
    "g","g",
    "h","h",
    "i","i","i","i","i","i","i","i",
    "j",
    "k",
    "l","l","l","l","l",
    "m","m","m",
    "n","n","n","n","n","n",
    "o","o","o","o","o","o",
    "p","p",
    "q",
    "r","r","r","r","r","r",
    "s","s","s","s","s","s",
    "t","t","t","t","t","t",
    "u","u","u","u","u","u",
    "v","v",
    "w",
    "x",
    "Y",
    "z",
    "*", "*"
  ];
  values = new Map<string, number>();
  lettersOwned: Letter[][] = [];
  selectedLetter: {letter: Letter, player: number} | null = null;
  player: number = 0;
  casesPut: {c: Case, x: number, y: number}[] = [];
  scores: number[] = [];
  swapLeft = 7;
  nbPlayers = 4;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    {
      this.values.set("a", 1);
      this.values.set("b", 3);
      this.values.set("c", 3);
      this.values.set("d", 2);
      this.values.set("e", 1);
      this.values.set("f", 4);
      this.values.set("g", 2);
      this.values.set("h", 4);
      this.values.set("i", 1);
      this.values.set("j", 8);
      this.values.set("k", 10);
      this.values.set("l", 1);
      this.values.set("m", 2);
      this.values.set("n", 1);
      this.values.set("o", 1);
      this.values.set("p", 3);
      this.values.set("q", 8);
      this.values.set("r", 1);
      this.values.set("s", 1);
      this.values.set("t", 1);
      this.values.set("u", 1);
      this.values.set("v", 4);
      this.values.set("w", 10);
      this.values.set("x", 10);
      this.values.set("y", 10);
      this.values.set("z", 10);
      this.values.set("*", 0);
    }
    this.route.paramMap.subscribe(res => {
      this.nbPlayers = parseInt(res.get('players')!);
        for(let i = 0; i < this.nbPlayers; i++) {
          this.lettersOwned[i] = [];
          this.scores[i] = 0;
          for(let j = 0; j < 7; j++) {
            this.getLetterFromPile(i);
          }
        }
    })
  }

  selectLetter(letter: Letter, player: number) {
    if(this.player == player) {
      this.selectedLetter?.letter.unselect();
      this.selectedLetter = {letter, player};
      letter.select();
    }
  }

  caseClicked(x: number, y: number, c: Case) {
    if(this.selectedLetter != null && this.swapLeft == 7 && c.getLetter() == null) {
      this.selectedLetter.letter.unselect();
      c.setLetter(this.selectedLetter.letter);
      this.casesPut.push({c, x, y});
      this.lettersOwned[this.selectedLetter.player] = this.lettersOwned[this.selectedLetter.player].filter(l => l != this.selectedLetter?.letter);
      this.selectedLetter = null;
    }
  }

  async done(e: any) {
    e.target.disabled = true;
    if(this.swapLeft != 7) {
      this.swapLeft = 7;
    } else if(await this.calculatePoints()) {
      for(let index in this.lettersOwned) {
        while(this.lettersOwned[index].length < 7) this.getLetterFromPile(parseInt(index));
      }
      this.player++;
      if(this.player == this.nbPlayers) {
        this.player = 0;
      }
    } else {
      this.reset();
    }
    e.target.disabled = false;
  }

  swap() {
    if(this.letters.length > 0 && this.selectedLetter != null && this.casesPut.length == 0 && this.swapLeft > 0) {
      this.swapLeft--;
      this.selectedLetter.letter.unselect();
      this.letters.push(this.selectedLetter.letter.getLetter());
      this.lettersOwned[this.player] = this.lettersOwned[this.player].filter(l => l != this.selectedLetter!.letter);
      this.getLetterFromPile(this.player);
    }
  }

  reset() {
    for(let l of this.casesPut) {
      let letter = l.c.getLetter();
      if(letter != null) this.lettersOwned[this.player].push(letter);
      l.c.removeLetter();
    }
    this.casesPut = [];
  }

  async calculatePoints(): Promise<boolean> {
    let words: string[] = [];
    let stop = false;
    let scoreBuffer = 0;
    for(let c of this.casesPut) {
      if(stop) break;
      let word = this.getWords(c);
      for(let w of word) {
        if(w.word != "" && !words.includes(w.word)) {
          console.log(w.word);
          if(!await this.checkWordValidity(w.word)) {
            this.reset();
            stop = true;
            break;
          }
          words.push(w.word);
          scoreBuffer += w.value;
        }
      }
    }
    if(!stop) {
      this.casesPut.forEach(c => {
        c.c.takeBonus();
      })
      this.casesPut = [];
      this.scores[this.player] += scoreBuffer;
    }
    console.log(this.casesPut);
    console.log(stop);
    return !stop;
  }

  async checkWordValidity(word: string): Promise<boolean> {
    if(word.match(/\*/)) {
      let letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
      let posibilities: string[] = [];
      letters.forEach(letter => {
        posibilities.push(word.replace('*', letter));
      });
      if(posibilities[0].match(/\*/)) {
        posibilities.forEach(p => {
          letters.forEach(letter => {
          posibilities.push(p.replace('*', letter));
          })
        })
      }
      let found = false;
      for(let p of posibilities) {
        console.log(`possibility: ${p}`);
        if(await fetch(`https://scrabble.fr.wordsdb.ws/validate/${p}`).then(res => res.text()).then(res => res == "true" ? true : false)) {
          console.log(`found: ${p}`);
          found = true;
          break;
        }
      }
      return found;
    }
    return await fetch(`https://scrabble.fr.wordsdb.ws/validate/${word}`).then(res => res.text()).then(res => res == "true" ? true : false);
  }
  getWords(c: {c: Case, x: number, y: number}): {value: number, word: string}[] {
    return [this.getWordH(c), this.getWordV(c)];
  }
  getWordV(c: {c: Case, x: number, y: number}): {value: number, word: string} {
    if((c.x - 1 >= 0 &&this.map[c.x - 1][c.y].getLetter() != null) || (c.x + 1 < this.map.length && this.map[c.x + 1][c.y].getLetter() != null)) {
      let total = 0;
      let word = "";
      let i = 0;
      while(c.x - i >= 0 && this.map[c.x - i][c.y].getLetter() != null) {
        i++;
      }
      let begin = c.x - i + 1;
      i = 0
      while(begin + i < this.map.length && this.map[begin + i][c.y].getLetter() != null) {
        i++;
      }
      let end = begin + i;
      let multuplier = 1;
      for(let i = begin; i < end; i++) {
        let caseM = this.map[i][c.y].getMultiplier();
        console.log(this.map[i][c.y]);
        multuplier = Math.max(caseM, multuplier);
        total += this.map[i][c.y].getLetterScore();
        word += this.map[i][c.y].getLetter()?.getLetter();
      }
      return {value: total * multuplier, word};
    } else {
      return {value: 0, word: ""};
    }
  }
  getWordH(c: {c: Case, x: number, y: number}): {value: number, word: string} {
    if((c.y - 1 >= 0 && this.map[c.x][c.y - 1].getLetter() != null) ||(c.y + 1 < this.map.length && this.map[c.x][c.y + 1].getLetter() != null)) {
      let total = 0;
      let word = "";
      let i = 0;
      while(c.y - i >= 0 && this.map[c.x][c.y - i].getLetter() != null) {
        i++;
      }
      let begin = c.y - i + 1;
      i = 0
      while(begin + i < this.map.length && this.map[c.x][begin + i].getLetter() != null) {
        i++;
      }
      let end = begin + i;
      let multuplier = 1;
      for(let i = begin; i < end; i++) {
        if(this.map[c.x][i].getType() == "tripleWord") multuplier = 3;
        else if(this.map[c.x][i].getType() == "doubleWord") multuplier = 2;
        total += this.map[c.x][i].getLetterScore();
        word += this.map[c.x][i].getLetter()?.getLetter();
      }
      return {value: total * multuplier, word};
    } else {
      return {value: 0, word: ""};
    }
  }

  getLetterFromPile(player: number) {
    let rand = Math.floor(Math.random() * this.letters.length);
    this.lettersOwned[player].push(new Letter(this.letters[rand], this.values.get(this.letters[rand]) ?? 0));
    this.letters = [...this.letters.slice(0, rand), ...this.letters.slice(rand + 1)];
  }

}
