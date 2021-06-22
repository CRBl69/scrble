import { Component, Input, OnInit } from '@angular/core';
import { Letter } from '../letter';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.scss']
})
export class LetterComponent implements OnInit {
  @Input() letter: Letter = new Letter("", 0);

  constructor() { }

  ngOnInit(): void {
  }

}
