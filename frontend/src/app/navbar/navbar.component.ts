import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}

  toggle(elem: HTMLElement) {
    elem.classList.toggle('nav-body-show');
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/');
  }
}
