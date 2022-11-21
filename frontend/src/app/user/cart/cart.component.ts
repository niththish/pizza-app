import { Component, OnInit } from '@angular/core';
import { cart } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart!: cart[];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe({
      next: (data: any) => {
        this.cart = data.orders.cart;
        console.log(this.cart);
      },
    });
  }

  cartEmpty() {
    this.cartService.cartEmpty().subscribe({
      next: (data) => {
        this.cart = [];
        console.log(data);
      },
    });
  }

  deleteCartItem(c: cart) {
    this.cartService.deleteCartItem(c).subscribe({
      next: (data) => {
        console.log(data);
        this.cart = this.cart.filter((cc) => cc !== c);
      },
    });
  }

  addToOrders() {
    this.cartService.addToOrders(this.cart).subscribe({
      next: (data) => {
        console.log(data);
        this.cartEmpty();
      },
    });
  }
}
