import { Component, OnInit } from '@angular/core';
import { navigationWebsiteRoutes } from '@website-shared/models/routes.js';
import { Observable } from 'rxjs';
import { ProductCartProxyService } from '@website-shared/services/product-cart-proxy.service';
import { map, startWith } from 'rxjs/operators';
import { ProductApi } from '@product-user-list/models/product';

@Component({
  selector: 'app-header-website',
  templateUrl: './header-website.component.html',
  styleUrls: ['./header-website.component.scss']
})
export class HeaderWebsiteComponent implements OnInit {
  navigationWebsiteRoutes = navigationWebsiteRoutes;
  totalProductCart: Observable<number>;

  constructor(
    private productCartProxyService: ProductCartProxyService
  ) {
  }

  ngOnInit(): void {
    this.totalProductCart = this.productCartProxyService.getSubscribeOnPushProduct()
      .pipe(
        startWith([]),
        map((products: ProductApi[]) => products.length)
      );
  }
}
