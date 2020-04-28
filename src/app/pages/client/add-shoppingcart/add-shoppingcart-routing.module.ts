import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AddShoppingcartPage } from "./add-shoppingcart.page";

const routes: Routes = [
  {
    path: "",
    component: AddShoppingcartPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddShoppingcartPageRoutingModule {}
