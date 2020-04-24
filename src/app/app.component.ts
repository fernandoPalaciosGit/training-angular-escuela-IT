import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

enum RockBandType {
  ROCK,
  INDIE,
  METAL
}

type RockBand = {
  name: string;
  type: RockBandType
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'training angular with escuela IT';
  rockBandList: RockBand[] = [];
  readonly ANGULAR: string = 'angular';
  readonly SPRING: string = 'spring';
  productList: Product[] = [];
  productSelected: Product;
  today: Date = new Date();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .then((response: Product[]) => this.productList = response);
  }

  private setTitle(value: string) {
    this.title = value;
  }

  changeTitle(event: { currentTarget: HTMLInputElement }) {
    this.setTitle(event.currentTarget.value);
  }

  cleanTitle() {
    this.setTitle('');
  }

  addRockBand(event: { currentTarget: HTMLInputElement }) {
    const rockBand = { name: event.currentTarget.value } as RockBand;
    this.rockBandList.push(rockBand);
  }

  removeRockBand(index: number) {
    this.rockBandList.splice(index, 1);
  }

  showProductSelected(product: Product) {
    this.productSelected = product;
  }
}
