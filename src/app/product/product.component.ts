import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() selectedProduct = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit(): void {
  }

  selectProduct() {
    this.selectedProduct.emit(this.product);
  }
}
