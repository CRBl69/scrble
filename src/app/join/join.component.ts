import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  name: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  join() {
    if(this.name == '') return;
    localStorage.setItem('username', this.name)

    this.route.paramMap.subscribe(res => {
      this.router.navigateByUrl(`/room/${res.get('name')}`);
    });
  }
}
