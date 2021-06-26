import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.scss']
})
export class SmartComponent {
  loading = true;
  roomName = '';
  roomExists = false;
  username = localStorage.getItem('username') ?? '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(res => {
      this.roomName = res.get('name')!;
      console.log(this.roomName);
      fetch(`http://${environment.domain}:6942/rooms`).then(res => res.json()).then(res => {
        res.forEach((r: string) => {
          if(r == this.roomName) this.roomExists = true;
        });
      })
    })
  }

  updateUsername() {
    this.username = localStorage.getItem('username') ?? '';
    console.log(this.username);
  }

  roomCreated(room: string) {
    this.roomExists = true
    this.router.navigateByUrl(`/room/${room}`)
  }
}
