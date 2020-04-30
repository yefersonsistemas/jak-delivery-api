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
    loadChildren: () => import('./pages/client/restaurant-list/restaurant-list.module').then( m => m.RestaurantListPageModule),
    // canLoad: [UsersGuard]
  },
  {
    path: 'restaurant-food/:id',
    loadChildren: () => import('./pages/client/restaurant-food/restaurant-food.module').then( m => m.RestaurantFoodPageModule),
    // canLoad: [UsersGuard]
  },
  {
    path: 'create-order',
    loadChildren: () => import('./pages/client/create-order/create-order.module').then( m => m.CreateOrderPageModule),
  // canLoad: [UsersGuard] //:id/:type/:providerid
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
  {
    path: 'pre-home',
    loadChildren: () => import('./pages/client/pre-home/pre-home.module').then( m => m.PreHomePageModule)
  },
  {
    path: 'logged-home',
    loadChildren: () => import('./pages/client/logged-home/logged-home.module').then( m => m.LoggedHomePageModule)
  },
  {
    path: 'add-shoppingcart',
    loadChildren: () => import('./pages/client/add-shoppingcart/add-shoppingcart.module').then( m => m.AddShoppingcartPageModule)
  },
  {
    path: 'add-shoppingcart/:id/:type/:providerid',
    loadChildren: () => import('./pages/client/add-shoppingcart/add-shoppingcart.module').then( m => m.AddShoppingcartPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
