import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  public url = 'http://localhost:3000/v1';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<Product[]>(`${this.url}/products`);
  }

  authenticate(data) {
    return this.httpClient.post(`${this.url}/accounts/authenticate`, data)
  }

}
