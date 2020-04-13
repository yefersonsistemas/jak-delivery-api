import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertserviceService } from '../../../services/alertservice.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  loginUser = {
    email: '',
    password: '',
  };
  constructor(private auth: AuthService, private alert: AlertserviceService, private NavCtrl: NavController) { }

  ngOnInit() {
  }

  login(fLogin: NgForm) {
    // fomulario invalido
    if (fLogin.invalid) {
      // mensaje de formulario invalido
      Swal.fire({
        icon: 'error',
        title: 'Ingrese el Email y/o Password',
        timer: 1500,
        showConfirmButton: false,
      });
    }

    // para mostrar mensaje en pantalla
    Swal.fire({
      icon: 'info',
      title: 'Iniciando Sesion',
      showConfirmButton: false,
    });

    Swal.showLoading();


    console.log(fLogin.valid);
    console.log(this.loginUser);

    // comunicacion con el servio de auth para el login
    this.auth.login(this.loginUser.email, this.loginUser.password).subscribe( resp => {
      console.log(resp);
      Swal.close();
      this.NavCtrl.navigateRoot('/home-client', { animated : true });
    }, (error) => {
      console.log('este es el error', error.error);
      if (error.error.person) {
        Swal.fire({
          icon: 'error',
          title: 'Usuario No registrado',
          showConfirmButton: false,
          timer: 1500,
        });
      }
      if (error.error.message) {
        Swal.fire({
          icon: 'error',
          title: 'Contraseña Incorrecta',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  }

}
