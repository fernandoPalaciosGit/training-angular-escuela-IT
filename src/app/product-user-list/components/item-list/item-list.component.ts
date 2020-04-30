import { Component, OnInit } from '@angular/core';
import { Product, ProductApi } from '@product-user-list/models/product';
import { ProductService } from '@product-user-list/services/product.service';

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

  navigateRouteProduct(product: ProductApi) {
    alert(`navigate to route with query: product${ product.id }`);
  }
}
