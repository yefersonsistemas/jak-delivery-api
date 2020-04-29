import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';
// const Url = 'http://127.0.0.1/proyecto-a-api/public/api/';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getFood( id: string ) {
    const provid = {
      id
    };
    return this.http.post( Url + 'auth/orders/food', provid );
  }

  getFoodInOrder(id: string, type: string, provider_id: string) {
    const data = {
      id, type, provider_id
    };
    return this.http.post( Url + 'auth/orders/search', data );
  }

  getExtras(id: string) {
    const ids = { id };

    return this.http.post( Url + 'auth/foodE/extra', ids);
  }

  getDrinks(id: string) {
    const ids = { id };

    return this.http.post( Url + 'auth/foodD/drink', ids);
  }

  getTypePayment() {
    return this.http.get( Url + 'auth/providers/type_payment');
  }

}
