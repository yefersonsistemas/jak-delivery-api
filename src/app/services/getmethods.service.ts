import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';
// const Url = 'http://127.0.0.1/proyecto-a-api/public/api/';
@Injectable({
  providedIn: 'root'
})
export class GetmethodsService {

  constructor(private http: HttpClient) { }

  getInfoAddress() {
    return this.http.get( Url + 'auth/address');
  }

  getProviders() {
    return this.http.get(Url + 'auth/providers/proveedor');
  }


}
