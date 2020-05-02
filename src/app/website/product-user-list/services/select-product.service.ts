import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductApi } from '@product-user-list/models/product';
import { filter } from 'rxjs/operators';

// actuara como proxy de información entre partes de la aplicación que no están comunicadas
// permitirá enlazar productos a a través de la suscripción de un BehaviorSubject (se puede entender como un proxy)
@Injectable({
  providedIn: 'root'
})
export class SelectProductService {
  private selected: BehaviorSubject<ProductApi> = new BehaviorSubject(null);

  constructor() {
  }

  onSelectProduct() {
    return this.selected.asObservable()
      .pipe(filter((product: ProductApi) => !!product));
  }

  selectProduct(product: ProductApi) {
    this.selected.next(product);
  }
}
