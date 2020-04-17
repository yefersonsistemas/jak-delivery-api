import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoggedHomePageRoutingModule } from './logged-home-routing.module';

import { LoggedHomePage } from './logged-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoggedHomePageRoutingModule
  ],
  declarations: [LoggedHomePage]
})
export class LoggedHomePageModule {}
