import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmsRoutingModule } from './cms-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from '@cms/components/navigation/navigation.component';
import { SharedModule } from '@shares/shared.module';
import { MaterialModule } from '@shares/material.module';
import { ProductNewSchematicComponent } from '@cms/components/product-new-schematic/product-new-schematic.component';
import { ProductNewComponent } from '@cms/components/product-new/product-new.component';


@NgModule({
  declarations: [NavigationComponent, ProductNewSchematicComponent, ProductNewComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    LayoutModule,
    MaterialModule,
    SharedModule
  ]
})
export class CmsModule {
}
