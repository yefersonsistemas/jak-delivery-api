import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantFoodPageRoutingModule } from './restaurant-food-routing.module';

import { RestaurantFoodPage } from './restaurant-food.page';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantFoodPageRoutingModule,
    PipesModule
  ],
  declarations: [RestaurantFoodPage]
})
export class RestaurantFoodPageModule {}
