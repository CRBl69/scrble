import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms: string[] = [];
  constructor() {
    fetch(`http://${environment.domain}:6942/rooms`).then(res => res.json()).then(res => {
      res.forEach((r: string) => this.rooms.push(r));
    })
  }

}
