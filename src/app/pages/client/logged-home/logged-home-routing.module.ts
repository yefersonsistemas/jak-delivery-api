import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoggedHomePage } from './logged-home.page';

const routes: Routes = [
  {
    path: '',
    component: LoggedHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedHomePageRoutingModule {}
