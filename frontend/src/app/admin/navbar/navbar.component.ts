import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class AdminNavbarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  toggle(elem: HTMLElement) {
    elem.classList.toggle('nav-body-show');
  }

  logout() {
    localStorage.clear();
    this.route.navigateByUrl('/');
  }

  headRoute(): string {
    return '/admin/pizzas';
  }
}
