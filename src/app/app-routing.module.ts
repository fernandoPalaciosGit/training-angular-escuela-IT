import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { NotFoundComponent } from '@shares/components/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./website/website.module')
    .then((module) => module.WebsiteModule)
}, {
  path: 'authentication',
  loadChildren: () => import('./authentication/authentication.module')
    .then((module) => module.AuthenticationModule)
}, {
  path: 'admin',
  loadChildren: () => import('./cms/cms.module')
    .then((module) => module.CmsModule)
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadingStrategy
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
