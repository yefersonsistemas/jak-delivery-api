import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  id: any;
  type: any;
  providerid: any;

  constructor( private acroute: ActivatedRoute, private food: FoodService) { }

  ngOnInit() {
    this.acroute.params.subscribe( params => {
      console.log(params);
      this.id = params.id; // parametro del id de la comida
      this.type = params.type; // parametro del tipo de la comida
      this.providerid = params.providerid; // parametro del id del proveedor
    });
  }


}
