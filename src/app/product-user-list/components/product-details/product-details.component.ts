import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ProductApi } from '@product-user-list/models/product';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<ProductApi>;

  constructor(private productRequest$: ActivatedRoute,
              private productListApiService: ProductListApiService) {
  }

  ngOnInit(): void {
    this.productRequest$.params.subscribe((param: Params) => {
      this.product$ = this.productListApiService.getProduct(param.id);
    });
  }
}
