import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.page.html',
  styleUrls: ['./profile-client.page.scss'],
})
export class ProfileClientPage implements OnInit {

// id: IdModel = new IdModel;

id = null;

profile = [];

  constructor(private storage: Storage, private auth: AuthService ) { }

async ngOnInit() {
    this.id = await this.storage.get('id');

    this.auth.getProfile(this.id).subscribe((resp: any) => {
      this.profile = resp.profile;
    });

    }

}
