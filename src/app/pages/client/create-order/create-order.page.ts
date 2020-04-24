import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { CartshoppingService } from '../../../services/cartshopping.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {
  path = 'http://192.168.0.87/proyecto-a-api/storage/app/public/';
  id: any;
  type: any;
  // tslint:disable-next-line: variable-name
  provider_id: any;
  foodInfo: any = {};
  extras: any = [];
  drinks: any = [];

  constructor( private acroute: ActivatedRoute, private food: FoodService, private shopping: CartshoppingService) { }

  ngOnInit() {
    // obteniendo los valores que se envian en la ruta
    this.acroute.params.subscribe( params => {
      this.id = params.id; // parametro del id de la comida
      this.type = params.type; // parametro del tipo de la comida
      this.provider_id = params.providerid; // parametro del id del proveedor
    });
    // obteniendo informacion de la comida seleccionada
    this.food.getFoodInOrder(this.id, this.type, this.provider_id).subscribe( resp => {
      console.log(resp);
      this.foodInfo = resp;
    });
    // obteniendo los extras del restaurante
    this.food.getExtras(this.provider_id).subscribe( resp => {
      console.log('extras', resp);
    });
    // obteniendo las bebidas del restaurante
    this.food.getDrinks(this.provider_id).subscribe( resp => {
      console.log('bebidas', resp);
      this.drinks = resp;
    });
  }

  onClick(id: any) {
    console.log(id);
  }

  // decreaseCartItem(id: string) {
  //   this.shopping.decreaseProduct(id);
  // }

  // increaseCartItem(id: string) {
  //   this.shopping.addProduct(id);
  // }



}
