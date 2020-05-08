import { Component, OnInit } from '@angular/core';
import { Product, ProductApi } from '@product-user-list/models/product';
import { ProductService } from '@product-user-list/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  productList: Product[] = [];
  productSelected: Product;

  constructor(
    private productService: ProductService,
    private route: Router
  ) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then((response: Product[]) => this.productList = response);
  }

  showProductSelected(product: Product) {
    this.productSelected = product;
  }

  navigateRouteProduct(product: ProductApi) {
    this.route.navigate(['/item-list/products', product.id]);
  }
}
