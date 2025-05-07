import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  username = localStorage.getItem('username') ?? '';

  constructor(private router: Router) { }

  setUsername() {
    if(this.username == '') localStorage.removeItem('username');
    else localStorage.setItem('username', this.username);
  }

  newRoom() {
    if(localStorage.getItem('username') != null) {
      fetch(`http://${environment.domain}:${environment.port}/new-room`).then(res => res.text()).then(res => {
        this.router.navigateByUrl(`/room/${res}`);
      })
    }
  }
}
