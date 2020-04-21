import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantFoodPageRoutingModule } from './restaurant-food-routing.module';

import { RestaurantFoodPage } from './restaurant-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantFoodPageRoutingModule
  ],
  declarations: [RestaurantFoodPage]
})
export class RestaurantFoodPageModule {}
