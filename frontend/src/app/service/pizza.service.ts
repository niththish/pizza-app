import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pizza } from '../interfaces/pizza.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getpizzas() {
    const url = `${environment.APIURL}/pizzas`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.get(url, { headers: headers });
  }

  addToCart(payload: any) {
    const url = `${environment.APIURL}/user/cart`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.post(url, payload, { headers });
  }

  deleteItem(id: string) {
    const url = `${environment.APIURL}/pizzas/${id}`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.delete(url, { headers });
  }
}
