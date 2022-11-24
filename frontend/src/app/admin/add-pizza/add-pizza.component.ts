import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaService } from 'src/app/service/pizza.service';

@Component({
  selector: 'app-add-pizza',
  templateUrl: './add-pizza.component.html',
  styleUrls: ['./add-pizza.component.scss'],
})
export class AddPizzaComponent implements OnInit {
  addPizzaForm!: FormGroup;
  file!: File;

  constructor(private fb: FormBuilder, private pizzaService: PizzaService) {
    this.addPizzaForm = fb.group({
      name: [, Validators.required],
      price: [, Validators.required],
      type: [, Validators.required],
    });
  }

  ngOnInit(): void {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  addItem() {
    const { name, price, type } = this.addPizzaForm.value;
    console.log(name, price, type);

    const formdata = new FormData();
    formdata.append('pizza_img', this.file);
    formdata.append('name', name);
    formdata.append('price', price);
    formdata.append('type', type);

    this.pizzaService.addItem(formdata).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
}
