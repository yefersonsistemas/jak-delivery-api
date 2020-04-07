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
    // canActivate: [UsersGuard]
  },
  {
    path: 'profile-client',
    loadChildren: () => import('./pages/client/profile-client/profile-client.module').then( m => m.ProfileClientPageModule),
    // canActivate: [UsersGuard]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
