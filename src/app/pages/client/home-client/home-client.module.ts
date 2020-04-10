import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClientPageRoutingModule } from './home-client-routing.module';

import { HomeClientPage } from './home-client.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from '../../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientPageRoutingModule, 
    ComponentsModule,
    PipesModule
  ],
  declarations: [HomeClientPage]
})
export class HomeClientPageModule {}
