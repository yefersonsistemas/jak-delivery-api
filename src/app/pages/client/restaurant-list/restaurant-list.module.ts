import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantListPageRoutingModule } from './restaurant-list-routing.module';

import { RestaurantListPage } from './restaurant-list.page';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantListPageRoutingModule,
    PipesModule
  ],
  declarations: [RestaurantListPage]
})
export class RestaurantListPageModule {}
