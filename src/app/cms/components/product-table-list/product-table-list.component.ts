import { Component, OnInit } from '@angular/core';
import { ProductApi } from '@product-user-list/models/product';
import { Observable } from 'rxjs';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';

@Component({
  selector: 'app-product-table-list',
  templateUrl: './product-table-list.component.html',
  styleUrls: ['./product-table-list.component.scss']
})
export class ProductTableListComponent implements OnInit {
  displayedColumns: Observable<string[]>;
  productList: Observable<ProductApi[]>;

  constructor(
    private productListApiService: ProductListApiService
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.productListApiService.getProductColumns();
    this.productList = this.productListApiService.getProductListPaginated(0, 5);
  }
}
