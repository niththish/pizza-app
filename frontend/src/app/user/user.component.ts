import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.route.navigateByUrl('user/pizzas');
  }
}
