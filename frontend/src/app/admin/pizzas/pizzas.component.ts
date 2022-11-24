import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pizza } from 'src/app/interfaces/pizza.interface';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
})
export class AdminPizzasComponent implements OnInit {
  pizzas: pizza[] = [];
  pizzaData: pizza[] = [];

  constructor(private pizzaService: PizzaService, private route: Router) {}

  ngOnInit(): void {
    this.pizzaService.getpizzas().subscribe({
      next: (data: any) => {
        this.pizzaData = data.pizzas;
        this.pizzas = this.pizzaData;
      },
    });
  }

  deleteItem(id: string) {
    this.pizzaService.deleteItem(id).subscribe({
      next: (res) => {
        this.pizzas = this.pizzas.filter((pizza) => pizza._id !== id);
      },
    });
  }

  editItem(pizza: pizza) {
    this.route.navigate(['admin/pizzas/edit'], { state: { pizza } });
  }
}
