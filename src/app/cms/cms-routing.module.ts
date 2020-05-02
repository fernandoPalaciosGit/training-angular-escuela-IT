import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewSchematicComponent } from '@cms/components/product-new-schematic/product-new-schematic.component';
import { ProductNewComponent } from '@cms/components/product-new/product-new.component';
import { NavigationComponent } from '@cms/components/navigation/navigation.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent
}, {
  path: 'products/new',
  component: ProductNewComponent
}, {
  path: 'products/new-schematic',
  component: ProductNewSchematicComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule {
}
