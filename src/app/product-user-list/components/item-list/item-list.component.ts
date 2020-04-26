import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  productList: Product[] = [];
  productSelected: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then((response: Product[]) => this.productList = response);
  }

  showProductSelected(product: Product) {
    this.productSelected = product;
  }
}
