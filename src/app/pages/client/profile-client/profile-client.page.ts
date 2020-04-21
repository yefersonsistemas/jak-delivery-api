import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
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
export class ProfileClientPage implements OnInit, AfterContentChecked {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  id: string;

  profile: any = {};

  userUpdate = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    type_dni: '',
    dni: '',
    address: ''

  };

  constructor(private storage: Storage, private auth: AuthService, private cdt: ChangeDetectorRef ) { }

async ngOnInit() {
    // se uso el metodo async para poder obtener el valor de forma real al enviarlo en el metodo post
    this.id = await this.storage.get('id');
    // Metodo para traer la informacion del usuario
    this.auth.getProfile(this.id).subscribe((resp: any) => {
      this.profile = resp.user;
    });

    }
    // fuencio usada para evitar el error de cambios de los datos en el select
    ngAfterContentChecked() {
      this.cdt.detectChanges();
    }

    updateUser( fUpdate: NgForm) {
    // Obteniedo el valor del id par enviarlo en el formulario
    this.storage.get('id').then(val => {
      this.id = val;
    });
    // Metodo para actualizar el usuario
    this.auth.updateProfile(this.userUpdate.name, this.userUpdate.lastname, this.userUpdate.email, this.userUpdate.phone,
      this.userUpdate.type_dni, this.userUpdate.dni, this.userUpdate.address, this.id).subscribe( (resp: any ) => {

    if (resp.message === 'Usuario actualizado') {
      Swal.fire({
        icon: 'success',
        title: 'Datos Actualizados',
        timer: 1500,
        showConfirmButton: false,
      });
    }
    });

    this.cdt.detectChanges();
  }

}
