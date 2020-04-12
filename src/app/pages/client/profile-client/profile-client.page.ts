import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../../services/auth.service';
import { IdModel } from '../../../models/id.model';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.page.html',
  styleUrls: ['./profile-client.page.scss'],
})
export class ProfileClientPage implements OnInit {

id: string;

  constructor(private storage: Storage, private auth: AuthService ) { }

  ngOnInit() {
    this.storage.get('id').then( val => {
      this.id = val;
      console.log('id desde el perfil', this.id);
    });

    this.auth.getProfile(this.id).subscribe((resp: any) => {
      console.log(resp);
    });

    }

}
