import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ProductApi, ProductColumns } from '@product-user-list/models/product';
import { Observable, of, Subject, zip } from 'rxjs';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {
  catchError,
  debounceTime,
  startWith,
  flatMap,
  map,
  skip,
  switchMap
} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-table-list',
  templateUrl: './product-table-list.component.html',
  styleUrls: ['./product-table-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
    ])
  ]
})
export class ProductTableListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  readonly paginationSize = [5, 10, 20];
  readonly noneSelector: ProductColumns = ['none'];
  displayedColumns: Observable<string[]>;
  displayedCategories: Observable<string[]>;
  selectedCategory: FormControl;
  tableDataSource: MatTableDataSource<ProductApi> = new MatTableDataSource();
  isLoadingResults = true;
  isRateLimitReached = false;
  resultsLength: Observable<number> = of(0);
  expandedProduct: ProductApi | null;
  private productList: Observable<ProductApi[]> = of([]);
  private manageFilterByOccurrence = new Subject<string>();

  constructor(
    private productListApiService: ProductListApiService
  ) {
  }

  ngOnInit(): void {
    this.displayedColumns = this.productListApiService.getProductColumns();
    this.displayedCategories = zip(of(this.noneSelector), this.productListApiService.getProductCategories())
      .pipe(flatMap((result) => result));
    this.resultsLength = this.productListApiService.getAllProducts()
      .pipe(map((products: ProductApi[]) => products.length));
    this.selectedCategory = new FormControl('');
  }

  ngAfterViewInit(): void {
    this.bindResetProductListOnPaginate();
    this.bindFilterDataMatTable();
    this.bindProductCategoriesSelection();
    this.subscribeRenderDataMatTable();
  }

  private subscribeRenderDataMatTable() {
    this.productList.subscribe((products: ProductApi[]) => this.tableDataSource.data = products);
  }

  private bindFilterDataMatTable() {
    this.manageFilterByOccurrence.pipe(debounceTime(250))
      .subscribe((value: string) => this.tableDataSource.filter = value);
  }

  private bindResetProductListOnPaginate() {
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

  filterByOccurrence($event: KeyboardEvent) {
    const filterValue = ($event.currentTarget as HTMLInputElement).value;
    this.manageFilterByOccurrence.next(filterValue.trim().toLowerCase());
  }

  private bindProductCategoriesSelection() {
    this.selectedCategory.valueChanges.pipe(
      skip(1),
      flatMap((category: string) => this.productListApiService.getProductListByCategory(category))
    ).subscribe((value: ProductApi[]) => this.tableDataSource.data = value);
  }
}
