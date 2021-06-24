import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent {
  roomName = '';
  playerName = '';
  error = '';

  constructor(private router: Router) {
  }

  createRoom() {
    localStorage.setItem('username', this.playerName);
    let options = {
      method: 'POST',
      body: this.roomName
    }
    fetch('http://localhost:6942/new-room', options).then(res => res.text()).then(res => {
      if(res == "created") {
        this.router.navigateByUrl(`/room/${this.roomName}`);
      } else {
        this.error = "Room already exists";
      }
    });
  }

}
