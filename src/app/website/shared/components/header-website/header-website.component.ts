import { Component, OnInit } from '@angular/core';
import {navigationWebsiteRoutes} from '@website-shared/models/routes.js';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-header-website',
  templateUrl: './header-website.component.html',
  styleUrls: ['./header-website.component.scss']
})
export class HeaderWebsiteComponent implements OnInit {
  navigationWebsiteRoutes = navigationWebsiteRoutes;
  totalProductCart: Observable<number> = of(8);

  constructor() { }

  ngOnInit(): void {
  }

}
