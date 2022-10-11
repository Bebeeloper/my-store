import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
    // return this.http.get<Product[]>('https://bd5a-181-143-227-82.ngrok.io/api/products');
    // return this.http.get<Product[]>('http://localhost:3001/api/products');
  }
}
