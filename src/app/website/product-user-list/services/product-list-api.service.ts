import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductApi } from '@product-user-list/models/product';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';

@Injectable()
export class ProductListApiService {
  static API = 'http://www.localhost:4000';
  static RESOURCE = 'products';

  private static getProductURL() {
    return `${ ProductListApiService.API }/${ ProductListApiService.RESOURCE }`;
  }

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<ProductApi[]> {
    return this.httpClient.get<ProductApi[]>(ProductListApiService.getProductURL());
  }

  getProduct(id: string): Observable<ProductApi> {
    return this.getAllProducts().pipe(
      flatMap((data: ProductApi[]) => data),
      filter((product: ProductApi) => product.id.toString() === id)
    );
  }
}
