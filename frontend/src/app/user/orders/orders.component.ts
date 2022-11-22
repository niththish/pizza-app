import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interfaces/order.inerface';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private orderService: OrderService) {}
  orders!: Order[];

  ngOnInit(): void {
    this.orderService.getOrders().subscribe({
      next: (data: any) => {
        this.orders = data.orders;
        console.log(this.orders);
      },
    });
  }

  toggleOrderBody(elem: HTMLElement) {
    elem.nextElementSibling?.classList.toggle('show');
  }
}
