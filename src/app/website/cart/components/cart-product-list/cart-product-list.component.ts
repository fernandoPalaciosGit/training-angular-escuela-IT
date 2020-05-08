import { Component, OnInit } from '@angular/core';
import { ProductApi } from '@product-user-list/models/product';
import { ProductCartProxyService } from '@website-shared/services/product-cart-proxy.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-product-list',
  templateUrl: './cart-product-list.component.html',
  styleUrls: ['./cart-product-list.component.scss']
})
export class CartProductListComponent implements OnInit {
  productApiCart: Observable<ProductApi[]>;

  constructor(
    private productCartProxyService: ProductCartProxyService
  ) {
  }

  ngOnInit(): void {
    this.productApiCart = this.productCartProxyService.getSubscribeOnPushProduct();
  }
}
