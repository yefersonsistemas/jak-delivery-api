import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductCreatePageRoutingModule } from './product-create-routing.module';

import { ProductCreatePage } from './product-create.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ProductCreatePageRoutingModule
  ],
  declarations: [ProductCreatePage]
})
export class ProductCreatePageModule {}
