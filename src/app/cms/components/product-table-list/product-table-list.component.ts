import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductApi } from '@product-user-list/models/product';
import { merge, Observable, of } from 'rxjs';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-table-list',
  templateUrl: './product-table-list.component.html',
  styleUrls: ['./product-table-list.component.scss']
})
export class ProductTableListComponent implements OnInit, AfterViewInit {
  displayedColumns: Observable<string[]>;
  productList: Observable<ProductApi[]>;
  isLoadingResults = true;
  isRateLimitReached = false;
  readonly paginationSize = [5, 10, 20];
  resultsLength: Observable<number> = of(0);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private productListApiService: ProductListApiService
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.productListApiService.getProductColumns();
    this.resultsLength = this.productListApiService.getAllProducts()
      .pipe(map((products: ProductApi[]) => products.length));
  }

  ngAfterViewInit(): void {
    this.resetProductListOnPaginate();
  }

  private resetProductListOnPaginate() {
    this.productList = this.paginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.productListApiService.getProductListPaginated
            .apply(this.productListApiService, this.getRangePagination());
        }),
        map((products: ProductApi[]) => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          return products;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return of([] as ProductApi[]);
        })
      );
  }

  private getRangePagination(): number[] {
    return [0, 1].map((range: number) => (this.paginator.pageIndex + range) * this.paginator.pageSize);
  }
}
