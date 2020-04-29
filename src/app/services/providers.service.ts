import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const Url = 'http://192.168.0.87/proyecto-a-api/public/api/';
// const Url = 'http://127.0.0.1/proyecto-a-api/public/api/';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private http: HttpClient) { }
  getProviderCardInfo(id: string) {
    const ids = { id };
    return this.http.post ( Url + 'auth/providers/provider/search', ids );
}

}
