import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Usuario } from '../models/interface';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string =  null;
  id: string = null;


  constructor(private http: HttpClient, private storage: Storage) { }

  register(usuario: Usuario) {

    return new Promise( resolve => {

      this.http.post( Url + 'auth/register', usuario)
      .subscribe(resp => {
        console.log(resp);

        // if ( resp['ok'] ) {
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

    this.http.post( Url + 'auth/login', data)
    .pipe(map(resp => {

    }));
    // .subscribe( resp => {
    //   console.log(resp);

    //   this.saveToken(resp['access_token']);
    //   this.saveData(resp['id'], resp['role'], resp['name']);

    //   return resp;
    //   });
  }


saveToken( access_token: string ) {
    this.token = access_token;
    this.storage.set( 'token', access_token );
  }

  saveData( id: string, role: string, name: string ) {
  this.storage.set('id', id), this.storage.set('role', role), this.storage.set('name', name);
  }

}
