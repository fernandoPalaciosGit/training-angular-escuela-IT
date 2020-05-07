import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductApi, ProductColumns } from '@product-user-list/models/product';
import { Observable } from 'rxjs';
import { filter, flatMap } from 'rxjs/operators';

@Injectable()
export class ProductListApiService {
  static API = 'http://www.localhost:4000';
  static RESOURCES = {
    LIST: 'products',
    COLUMNS: 'productColumns',
    CATEGORIES: 'productCategories'
  };

  private static getProductURL(resource) {
    return `${ ProductListApiService.API }/${ ProductListApiService.RESOURCES[resource] }`;
  }

  private static getProductListURLPaginated(start: number, end: number) {
    return `${ ProductListApiService.getProductURL('LIST') }?_start=${ start }&_end=${ end }`;
  }

  private static getProductListURLFilterOccurrence(category: string) {
    return `${ ProductListApiService.getProductURL('LIST') }?category_like=${ category }`;
  }

  constructor(private httpClient: HttpClient) {
  }

  getProductListPaginated(start: number, end: number): Observable<ProductApi[]> {
    return this.httpClient.get<ProductApi[]>(ProductListApiService.getProductListURLPaginated(start, end));
  }

  getProductListByCategory(category: string): Observable<ProductApi[]> {
    return this.httpClient.get<ProductApi[]>(ProductListApiService.getProductListURLFilterOccurrence(category));
  }

  getAllProducts(): Observable<ProductApi[]> {
    return this.httpClient.get<ProductApi[]>(ProductListApiService.getProductURL('LIST'));
  }

  getProductColumns(): Observable<ProductColumns> {
    return this.httpClient.get<ProductColumns>(ProductListApiService.getProductURL('COLUMNS'));
  }

  getProductCategories(): Observable<ProductColumns> {
    return this.httpClient.get<ProductColumns>(ProductListApiService.getProductURL('CATEGORIES'));
  }

  getProduct(id: string): Observable<ProductApi> {
    return this.getAllProducts().pipe(
      flatMap((data: ProductApi[]) => data),
      filter((product: ProductApi) => product.id.toString() === id)
    );
  }
}
