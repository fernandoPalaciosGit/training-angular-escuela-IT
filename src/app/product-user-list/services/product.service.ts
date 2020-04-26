import { Injectable } from '@angular/core';
import { product } from '../mocks/product';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private static repeatProduct = 3;

  constructor() {
  }

  private static getUniqueProduct(): Product {
    const longitudeCode = 5;
    const randomCode: string = Math.random().toPrecision(longitudeCode);
    return { ...product, id: `${ product.id }-${ randomCode }` };
  }

  private static getMockProductList(): Product[] {
    return Array.from(Array(this.repeatProduct)).map(() => this.getUniqueProduct());
  }

  getProducts(): Promise<Product[]> {
    return Promise.resolve(ProductService.getMockProductList());
  }
}
