import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const Url = "http://192.168.0.87/proyecto-a-api/public/api/";
// const Url = 'http://127.0.0.1/proyecto-a-api/public/api/';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // getFood( id: string ) {
  //   return this.http.post(Url + '', id);
  // }
}
