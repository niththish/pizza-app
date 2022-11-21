import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cart } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems() {
    const url = `${environment.APIURL}/user/cart`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.get(url, { headers });
  }

  cartEmpty() {
    const url = `${environment.APIURL}/user/cart`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.delete(url, { headers });
  }

  deleteCartItem(item: cart) {
    const url = `${environment.APIURL}/user/cart/item`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.delete(url, { headers, body: item });
  }

  addToOrders(cart: cart[]) {
    const url = `${environment.APIURL}/orders`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.post(url, { headers, body: cart });
  }
}
