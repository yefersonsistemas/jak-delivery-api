import { Component, OnInit } from '@angular/core';
import { GetmethodsService } from '../../../services/getmethods.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.page.html',
  styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {

  providers: any[] = [];

  textSearch = '';

  constructor(private getmethods: GetmethodsService, private router: Router) { }

  ngOnInit() {
    this.getmethods.getProviders().subscribe(( resp: any ) => {
      console.log(resp);
      this.providers = resp;
    });
  }

  search( event ) {
    this.textSearch = event.detail.value;
    console.log(this.textSearch);
  }

  getFood(id: any) {
    this.router.navigate(['/restaurant-food', id]);
  }

}
