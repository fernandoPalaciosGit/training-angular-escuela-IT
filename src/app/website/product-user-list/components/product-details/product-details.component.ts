import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { flatMap } from 'rxjs/operators';
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
    this.product$ = this.productRequest$.params.pipe(
      flatMap((param) => this.productListApiService.getProduct(param.id))
    );
  }
}
