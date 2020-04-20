import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsersGuard } from './guards/users.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-client'},
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home-client',
    loadChildren: () => import('./pages/client/home-client/home-client.module').then( m => m.HomeClientPageModule),
    // canLoad: [UsersGuard]
  },
  {
    path: 'profile-client',
    loadChildren: () => import('./pages/client/profile-client/profile-client.module').then( m => m.ProfileClientPageModule),
    // canLoad: [UsersGuard]
  },
  {
    path: 'restaurant-list',
    loadChildren: () => import('./pages/client/restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule)
  },
  {
    path: 'restaurant-food/:id',
    loadChildren: () => import('./pages/client/restaurant-food/restaurant-food.module').then( m => m.RestaurantFoodPageModule)
  },
  {
    path: 'product-create',
    loadChildren: () => import('./pages/provider/product-create/product-create.module').then( m => m.ProductCreatePageModule),
    // canLoad: [UsersGuard]
  },
  {
    path: 'product-edit',
    loadChildren: () => import('./pages/provider/product-edit/product-edit.module').then( m => m.ProductEditPageModule),
    // canLoad: [UsersGuard]
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/provider/product-list/product-list.module').then( m => m.ProductListPageModule),
    // canLoad: [UsersGuard]
  },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
