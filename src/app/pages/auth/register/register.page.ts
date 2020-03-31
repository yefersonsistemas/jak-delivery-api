import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertserviceService } from '../../../services/alertservice.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerUser: Usuario = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    type_dni: '',
    dni: '',
    state: '',
    city: '',
    municipality: '',
    parishe: '',
    address: '',
    role: '',
  };

  constructor(private auth: AuthService, private alert: AlertserviceService, private NavCtrl: NavController) { }

  ngOnInit() {
  }

  async register(fRegister: NgForm) {

    if (fRegister.invalid) {this.alert.infoAlert('Verifique los campos requeridos'); }

    console.log(fRegister.valid);

    console.log(this.registerUser);

  //   const valid = await this.auth.register(this.registerUser);

  //   if ( valid ) {
  //     this.NavCtrl.navigateRoot(['/main/tabs/tab1'], { animated: true} );
  //   } else {
  //     this.alert.infoAlert('El correo ya esta registrado');
  //   }
  }

}
