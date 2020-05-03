import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { NotFoundComponent } from '@shares/components/not-found/not-found.component';
import { UserLoggedGuard } from '@authentication/guard/user-logged.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./website/website.module')
    .then((module) => module.WebsiteModule)
}, {
  path: 'authentication',
  loadChildren: () => import('./authentication/authentication.module')
    .then((module) => module.AuthenticationModule)
}, {
  // a esta area no se puede acceder si NO estas logged -> GUARD
  path: 'admin',
  canActivate: [UserLoggedGuard],
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
