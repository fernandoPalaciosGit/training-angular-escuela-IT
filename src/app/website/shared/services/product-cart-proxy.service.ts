import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductApi } from '@product-user-list/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartProxyService {
  private readonly INIT_CART = [];
  private productList: ProductApi[] = this.INIT_CART;
  private $productCart = new BehaviorSubject<ProductApi[]>(this.INIT_CART);

  constructor() {
  }

  getSubscribeOnPushProduct(): Observable<ProductApi[]> {
    return this.$productCart.asObservable();
  }

  addProduct(product: ProductApi): void {
    this.productList.push(product);
    this.$productCart.next(this.productList);
  }
}
