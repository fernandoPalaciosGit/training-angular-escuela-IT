import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductApi } from '@product-user-list/models/product';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductCartProxyService {
  private productList: ProductApi[] = [];
  private $productCart = new BehaviorSubject<ProductApi[]>(this.productList);

  constructor() {
  }

  getSubscribeOnPushProduct() {
    return this.$productCart.asObservable()
      .pipe(filter((products: ProductApi[]) => products.length > 0));
  }

  addProduct(product: ProductApi) {
    this.productList.push(product);
    this.$productCart.next(this.productList);
  }
}
