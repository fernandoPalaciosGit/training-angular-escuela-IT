import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { product } from '../../mocks/product';
import { AlgorithmService } from '../../services/algorithm.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  product: Product;
  productList: Product [] = [];
  textProduct: string;

  constructor(private algorithm: AlgorithmService) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    this.productList.push({ ...product, text: this.textProduct });
    this.textProduct = '';
  }

  // si esta función se ejecutara en el template: si hay algun ngBing qe cambia (por ejemplo el del input de keyboard) se lanzatra continuamente ---> PIPES!!! almacenan en memoria los los datos de salida en funcion de los mismos datos de entrada
  calculateIndexFibonacci(index: number) {
    return this.algorithm.getFibonacciNumber(index);
  }
}
