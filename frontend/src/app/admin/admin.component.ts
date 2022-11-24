import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private route: Router) {}
  ngOnInit(): void {
    this.route.navigateByUrl('admin/pizzas');
  }
}
