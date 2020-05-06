import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductNewSchematicComponent } from '@cms/components/product-new-schematic/product-new-schematic.component';
import { ProductNewComponent } from '@cms/components/product-new/product-new.component';
import { NavigationComponent } from '@cms/shared/components/navigation/navigation.component';
import { AnalyticsComponent } from '@cms/components/analytics/analytics.component';
import { ProductTableListComponent } from '@cms/components/product-table-list/product-table-list.component';


const routes: Routes = [{
  path: '',
  component: NavigationComponent,
  // SE PUEDE USAR GUARDS POR CADA TIPO DE USUARIO, y le podriamos añadir la validacion de rol de usuario
  children: [{
    path: '',
    component: ProductNewComponent
  }, {
    path: 'products/new',
    component: ProductNewComponent
  }, {
    path: 'products/table-list',
    component: ProductTableListComponent
  }, {
    path: 'products/new-schematic',
    component: ProductNewSchematicComponent
  }, {
    path: 'analytics',
    component: AnalyticsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule {
}
