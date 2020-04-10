import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetmethodsService } from '../../../services/getmethods.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {

  providers: any[] = [];
  textSearch = '';

  constructor( private http: HttpClient, private getmethods: GetmethodsService) { }

  ngOnInit() {
    this.getmethods.getProviders().subscribe( (resp: any) => {
      console.log(resp);
      this.providers = resp;
    });
  }

  buscar(event){
    // console.log(event);
    this.textSearch = event.detail.value;
  }

}
