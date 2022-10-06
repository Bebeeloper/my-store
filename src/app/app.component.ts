import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // descriptionComplete: boolean = false;

  products: Product[] = [];

  showDescriptionComplete(index: number){
    this.products[index].descriptionComplete = !this.products[index].descriptionComplete;
  }

  constructor(
    private productsService: ProductsService
  ){}

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data;
      this.shortDescription();
    });
  }

  shortDescription(){
    for (let pro of this.products) {
      pro.descriptionComplete = false;
    }
  }

}
