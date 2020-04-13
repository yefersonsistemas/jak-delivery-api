import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Usuario } from '../models/interface';
import { Storage } from '@ionic/storage';
import { map } from 'rxjs/operators';

const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';
// const Url = 'http://127.0.0.1/proyecto-a-api/public/api/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string =  null;
  id: string = null;
  role: string = null;
  name: string = null;

  // usuario: Usuario = {};

  constructor(private http: HttpClient, private storage: Storage) { }
  // metodo para enviar la informacion a la api (este es el registro)
  register(usuario: Usuario) {
      return this.http.post( Url + 'auth/register', usuario)
      .pipe(map(resp => {
            return resp;
          }));
  }

  // metodo para enviar la informacion y guardan el token que se envia de la api (este es el login)
  login(email: string, password: string) {
    const data = { email, password };
    return this.http.post( Url + 'auth/login', data)
    .pipe(map(resp => {
      this.saveToken(resp['access_token']);
      this.saveData(resp['id'], resp['role'], resp['name']);
      return resp;
    }));
  }
  // metodo para enviar la informacion a la api (este es el perfil del usuario)
  getProfile(id: string) {
    const userid = { id };
    return this.http.post( Url + 'auth/profile', userid ).pipe(map(resp => {
      return resp;
    }));
  }

  // metodo que limpia el storage despues del logout
  logout() {
    this.token = null;
    this.id = null;
    this.role = null;
    this.name = null;
    this.storage.clear();

  }
  // metodo que guarda en el storage el token que login envia
  saveToken( access_token: string ) {
    this.token = access_token;
    this.storage.set( 'token', access_token );
  }
  // metodo que guarda en el storage la informacion del usuario que login envia
  saveData( id: string, role: string, name: string ) {
    this.id = id;
    this.role = role;
    this.name = name;
    this.storage.set('id', id), this.storage.set('role', role), this.storage.set('name', name);
  }
  // aqui se lee el token del storage
  async readToken() {
    if (this.storage.get('token')) {
      this.token = await this.storage.get('token');
    } else {
      this.token = '';
    }
    return this.token;
  }
  // se utiliza para validar el ruteo desde el user.guard
  isAuthenticated(): boolean {
    return this.token.length > 2;
  }

}
