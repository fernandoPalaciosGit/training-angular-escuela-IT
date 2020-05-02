import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductApi } from '@product-user-list/models/product';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';
import { Observable } from 'rxjs';
import { SelectProductService } from '@product-user-list/services/select-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() selectedProduct = new EventEmitter<Product>();
  productListApi$: Observable<ProductApi[]>;
  today: Date = new Date();

  constructor(
    private productService: ProductListApiService,
    private selectProductService: SelectProductService
  ) {
  }

  ngOnInit(): void {
    this.productListApi$ = this.productService.getAllProducts();
  }

  selectedProductApi(productApi: ProductApi) {
    this.selectProductService.selectProduct(productApi);
  }

  selectProduct() {
    this.selectedProduct.emit(this.product);
  }
}
