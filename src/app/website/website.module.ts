import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { HeaderWebsiteComponent } from './shared/components/header-website/header-website.component';
import { LayoutWebsiteComponent } from './shared/components/layout-website/layout-website.component';
import { MaterialModule } from '@shares/material.module';


@NgModule({
  declarations: [HeaderWebsiteComponent, LayoutWebsiteComponent],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule
  ]
})
export class WebsiteModule { }
