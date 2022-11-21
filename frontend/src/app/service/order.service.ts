import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders() {
    const url = `${environment.APIURL}/orders`;
    const authentication = `Bearer ${localStorage.getItem('token')}`;
    const headers = new HttpHeaders({ authorization: authentication });
    return this.http.get(url, { headers });
  }
}
