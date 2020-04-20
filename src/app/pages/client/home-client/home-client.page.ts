import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetmethodsService } from '../../../services/getmethods.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {

  providers: any[] = [];
  textSearch = '';
  categories = [
    {
    title: 'Restaurant',
    redirectTo: '/restaurant-list'
    }
];

  constructor( private getmethods: GetmethodsService, private navCtrl: NavController) { }

  ngOnInit() {
    this.getmethods.getProviders().subscribe(( resp: any ) => {
      console.log(resp);
      this.providers = resp;
    });
  }

  goRestaurant() {
    this.navCtrl.navigateRoot('restaurant-list', {animated : true});
  }

  search( event ) {
    this.textSearch = event.detail.value;
    console.log(this.textSearch);
  }

}
