import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit{
  @Input() predefinedName : string = '';
  @Output() roomCreated = new EventEmitter();
  roomName = '';
  playerName = '';
  error = '';

  constructor(private router: Router) {
    this.playerName = localStorage.getItem('username') ?? '';
  }

  ngOnInit() {
    if(this.predefinedName != '') this.roomName = this.predefinedName;
  }

  createRoom() {
    localStorage.setItem('username', this.playerName);
    let options = {
      method: 'POST',
      body: this.roomName
    }
    fetch(`http://${environment.domain}:6942/new-room`, options).then(res => res.text()).then(res => {
      if(res == "created") {
        this.roomCreated.emit(this.roomName);
      } else {
        this.error = "Room already exists";
      }
    });
  }

}
