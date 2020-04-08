import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  {
    path: 'main',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'product-create',
    loadChildren: () => import('./pages/provider/product-create/product-create.module').then( m => m.ProductCreatePageModule)
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./pages/provider/product-edit/product-edit.module').then( m => m.ProductEditPageModule)
  },  {
    path: 'product-list',
    loadChildren: () => import('./pages/provider/product-list/product-list.module').then( m => m.ProductListPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
