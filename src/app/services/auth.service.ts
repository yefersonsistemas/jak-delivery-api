import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Usuario } from '../models/interface';
import { Storage } from '@ionic/storage';
const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string =  null;

  constructor(private http: HttpClient, private storage: Storage) { }

  register(usuario: Usuario) {

    return new Promise( resolve => {

      this.http.post( Url + 'auth/register', usuario)
      .subscribe(resp => {
        console.log(resp);

        // if ( resp['ok: true'] ) {
        //   this.saveToken(resp['token']);
        //   resolve(true);
        // } else {
        //   this.token = null;
        //   this.storage.clear();
        //   resolve(false);
        // }
      });
    });
  }

  login(email: string, password: string, role: string) {

    const data = { email, password, role};
    console.log('data servicio login', data);
    return new Promise( resolve => {

    this.http.post( Url + 'auth/login', data)
    .subscribe( resp => {
      console.log('login', resp);

      // if (resp['ok: true']) {
      //   this.saveToken(resp['token']);
      //   resolve(true);
      // } else {
      //   this.token = null;
      //   this.storage.clear();
      //   resolve(false);
      // }
        });
    });
  }


  async saveToken( token: string ) {
    this.token = token;
    await this.storage.set( 'token', token );
  }


}
