import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from '@shares/shared.module';
import { MaterialModule } from '@shares/material.module';
import { ProductNewSchematicComponent } from '@cms/components/product-new-schematic/product-new-schematic.component';
import { ProductNewComponent } from '@cms/components/product-new/product-new.component';
import { NavigationComponent } from '@cms/shared/components/navigation/navigation.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { ProductTableListComponent } from './components/product-table-list/product-table-list.component';
import { ProductListApiService } from '@product-user-list/services/product-list-api.service';

@NgModule({
  declarations: [NavigationComponent, ProductNewSchematicComponent, ProductNewComponent, AnalyticsComponent, ProductTableListComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    LayoutModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ProductListApiService]
})
export class CmsModule {
}
