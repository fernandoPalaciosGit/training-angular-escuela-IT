import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductApi } from '@product-user-list/models/product';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() selectedProduct = new EventEmitter<Product>();
  @Output() selectedProductApi = new EventEmitter<ProductApi>();
  productListApi$: Observable<ProductApi[]>;
  today: Date = new Date();

  constructor(private productService: ProductListApiService) {
  }

  ngOnInit(): void {
    this.productListApi$ = this.productService.getAllProducts();
  }

  selectProduct() {
    this.selectedProduct.emit(this.product);
  }
}
