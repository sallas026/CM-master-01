import { Component } from '@angular/core';
import { productService } from 'src/services/products/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private products: productService) { }

  ngOnInit() {
    this.products.getUsersList();
  }

}
