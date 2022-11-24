import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { pizza } from 'src/app/interfaces/pizza.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from 'src/app/service/pizza.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pizza',
  templateUrl: './edit-pizza.component.html',
  styleUrls: ['./edit-pizza.component.scss'],
})
export class EditPizzaComponent implements OnInit {
  pizza!: pizza;
  updatePizzaForm!: FormGroup;
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private pizzaService: PizzaService,
    private route: Router
  ) {
    this.updatePizzaForm = fb.group({
      name: [, Validators.required],
      price: [, Validators.required],
      type: [, Validators.required],
    });
  }

  ngOnInit(): void {
    const state: any = this.location.getState();
    this.pizza = state.pizza;
    console.log(this.pizza);
  }

  updateItem() {
    const payload = this.updatePizzaForm.value;
    const id = this.pizza._id;
    this.pizzaService.updateItem(id, payload).subscribe({
      next: (res) => {
        this.route.navigate(['admin/pizzas'], { skipLocationChange: true });
      },
    });
  }
}
