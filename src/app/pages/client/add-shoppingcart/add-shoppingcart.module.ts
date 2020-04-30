import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { AddShoppingcartPageRoutingModule } from "./add-shoppingcart-routing.module";

import { AddShoppingcartPage } from "./add-shoppingcart.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddShoppingcartPageRoutingModule,
  ],
  declarations: [AddShoppingcartPage],
})
export class AddShoppingcartPageModule {}
