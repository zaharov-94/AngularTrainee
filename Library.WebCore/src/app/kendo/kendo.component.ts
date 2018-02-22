import { Component } from '@angular/core';
import { products } from './products';
import { Product } from './model';

@Component({
  templateUrl: './kendo.component.html'
})
export class KendoComponent {
  public products: any[] = products;

  createNewProduct(): Product {
    return new Product();
  }
}
