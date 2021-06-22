import { Component, Input, OnInit } from '@angular/core';
import { Case } from '../case';
import { Letter } from '../letter';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {
  @Input() case: Case = new Case("normal");
  @Input() x: number = 0;
  @Input() y: number = 0;

  nullLetter = new Letter("",0);

  constructor() { }

  ngOnInit(): void {
  }
}
