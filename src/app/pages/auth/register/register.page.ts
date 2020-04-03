import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertserviceService } from '../../../services/alertservice.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/interface';
import { NavController } from '@ionic/angular';
import { GetmethodsService } from 'src/app/services/getmethods.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  address: any[] = [];
  role: any[] = [];

  registerUser: Usuario = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    type_dni: '',
    dni: '',
    states_id: '',
    cities_id: '',
    municipalities_id: '',
    parishes_id: '',
    address: '',
    role: 'client',
    password: '',
  };

  constructor(private auth: AuthService, private alert: AlertserviceService, private NavCtrl: NavController,
              private getmethods: GetmethodsService) { }

  ngOnInit() {
    // codigo para traer los estados, ciudades, municipios y parroquias
    this.getmethods.getInfoAddress().subscribe((resp: any ) => {
      this.address = resp;
      console.log('toda la geografia', this.address);
    });

    // this.getmethods.getRoles().subscribe((resp: any) => {
    //   this.role = resp;
    //   console.log('roles', this.role);
    // });
  }

  async register(fRegister: NgForm) {

    console.log(fRegister.value.role);

    if (fRegister.invalid) {this.alert.infoAlert('Verifique los campos requeridos'); }

    console.log(fRegister.valid);

    console.log(this.registerUser);

    const valid = await this.auth.register(this.registerUser);

    if ( valid ) {
      this.NavCtrl.navigateRoot(['/main/tabs/tab1'], { animated: true} );
    } else {
      this.alert.infoAlert('El correo ya esta registrado');
    }
  }

}
