import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { product } from '../../mocks/product';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { Users } from '../../models/users';
import { AlgorithmService } from '../../../shared/services/algorithm.service';

@Component({
  selector: 'app-users',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  product: Product;
  productList: Product [] = [];
  textProduct: string;
  private readonly USER_NUMBER_LIST = 5;
  users$: Observable<Users[]>;

  constructor(
    private algorithm: AlgorithmService,
    private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.users$ = this.usersService.getAllUsers(this.USER_NUMBER_LIST);
  }

  addProduct() {
    this.productList.push({ ...product, text: this.textProduct });
    this.textProduct = '';
  }

  // si esta función se ejecutara en el template: si hay property ngBing (por ejemplo el del input de keyboard) se lanzará continuamente
  // ---> PIPES!!! almacenan en memoria los los datos de salida en función de los mismos datos de entrada
  calculateIndexFibonacci(index: number) {
    return this.algorithm.getFibonacciNumber(index);
  }
}
