import { Component, OnInit } from '@angular/core';
import { pizza } from 'src/app/interfaces/pizza.interface';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
})
export class PizzasComponent implements OnInit {
  pizzas: pizza[] = [];
  pizzaData: pizza[] = [];
  image_BASEURL = 'http://localhost:5000/';
  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {
    this.pizzaService.getpizzas().subscribe({
      next: (data: any) => {
        this.pizzaData = data.pizzas;
        this.pizzas = this.pizzaData;
        console.log(this.pizzaData);
      },
    });
  }

  addToCart(id: string, price: number) {
    const payload = {
      productId: id,
      price,
      quantity: 1,
    };

    this.pizzaService
      .addToCart(payload)
      .subscribe({ next: (res) => console.log(res) });
  }

  filterPizza(type: string) {
    this.pizzas = this.pizzaData.filter((pizza: pizza) => pizza.type === type);
  }
}
