import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantFoodPage } from './restaurant-food.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantFoodPageRoutingModule {}
