import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Usuario } from '../models/interface';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { IdModel } from '../models/id.model';
// const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';
const Url = 'http://127.0.0.1/proyecto-a-api/public/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string =  null;
  id: string = null;
  role: string = null;
  name: string = null;

  constructor(private http: HttpClient, private storage: Storage) { }

  register(usuario: Usuario) {

      return this.http.post( Url + 'auth/register', usuario)
      .pipe(map(resp => {
            console.log(resp);
            return resp;
          }));
  }

  login(email: string, password: string) {

    const data = { email, password };

    return this.http.post( Url + 'auth/login', data)
    .pipe(map(resp => {

      console.log(resp);

      this.saveToken(resp['access_token']);
      this.saveData(resp['id'], resp['role'], resp['name']);

      return resp;
    }));
  }

  getProfile(id: IdModel) {
    console.log('id dede el servicio (getprofile)', id);
    return this.http.post( Url + 'auth/profiles/profile', id ).pipe(map(resp => {
      console.log(resp);
      return resp;
    }));
  }

  logout() {
    this.token = null;
    this.id = null;
    this.role = null;
    this.name = null;
    this.storage.clear();

  }

  saveToken( access_token: string ) {
    this.token = access_token;
    this.storage.set( 'token', access_token );
  }

  saveData( id: string, role: string, name: string ) {
    this.id = id;
    this.role = role;
    this.name = name;
    this.storage.set('id', id), this.storage.set('role', role), this.storage.set('name', name);
  }

  async readToken() {
    if (this.storage.get('token')) {
      this.token = await this.storage.get('token');
    } else {
      this.token = '';
    }
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token.length > 2;
  }

}
