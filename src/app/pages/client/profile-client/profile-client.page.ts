import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/interface';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { UserUpdate } from '../../../models/interface';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.page.html',
  styleUrls: ['./profile-client.page.scss'],
})
export class ProfileClientPage implements OnInit {

  id = null;

  profile: any = {};

  userUpdate: UserUpdate = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    type_dni: '',
    dni: '',
    address: '',
    // password: '',
  };

  constructor(private storage: Storage, private auth: AuthService ) { }

async ngOnInit() {
    this.id = await this.storage.get('id');

    this.auth.getProfile(this.id).subscribe((resp: any) => {
      // console.log(resp);
      this.profile = resp.profile;
      console.log(this.profile);
    });
    }

    updateUser( fUpdate: NgForm) {

      if ( fUpdate.invalid) {
        Swal.fire({
          icon: 'error',
          title: 'Verifique los campos requeridos',
          timer: 1500,
          showConfirmButton: false,
        });
      }
      console.log(this.userUpdate);
    }
}
