import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  name: string = '';
  room: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(res => {
      this.room = res.get('name') ?? '';
      if(localStorage.getItem('username') != null) this.router.navigateByUrl(`/room/${this.room}`);
    });
  }

  join() {
    if(this.name == '') return;
    localStorage.setItem('username', this.name)

    this.router.navigateByUrl(`/room/${this.room}`);
  }
}
