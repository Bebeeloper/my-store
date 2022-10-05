import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  products: Product[] = [
    {
      name: 'Carne de cerdo',
      price: 12500,
      image: '../assets/products/meat.jpg'
    },
    {
      name: 'Pechuga de pollo',
      price: 8500,
      image: '../assets/products/chicken.jpg'
    },
    {
      name: 'Panal de juevos',
      price: 14000,
      image: '../assets/products/eggs.jpg'
    },
    {
      name: 'Cebolla cabezona',
      price: 2000,
      image: '../assets/products/onion.jpg'
    },
    {
      name: 'Tomates',
      price: 8500,
      image: '../assets/products/tomato.jpg'
    },
    {
      name: 'Tomates',
      price: 8500,
      image: '../assets/products/tomato.jpg'
    },
    {
      name: 'Tomates',
      price: 8500,
      image: '../assets/products/tomato.jpg'
    },
    {
      name: 'Tomates',
      price: 8500,
      image: '../assets/products/tomato.jpg'
    }
  ];

}
