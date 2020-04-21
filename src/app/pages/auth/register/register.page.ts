import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AlertserviceService } from '../../../services/alertservice.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/interface';
import { IonSlides, NavController } from '@ionic/angular';
import { GetmethodsService } from 'src/app/services/getmethods.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @ViewChild('slidePrincipal', { static: true }) slides: IonSlides;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

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
    password: '',
  };

  constructor(private auth: AuthService, private alert: AlertserviceService, private NavCtrl: NavController,
              private getmethods: GetmethodsService) { }

  ngOnInit() {

    // Codigo para bloquear el slide
    this.slides.lockSwipes( true );
    // codigo para traer los estados, ciudades, municipios y parroquias
    this.getmethods.getInfoAddress().subscribe((resp: any ) => {
      this.address = resp;
      console.log('toda la geografia', this.address);
    });
  }

  register(fRegister: NgForm) {

    // Validacion de Registro Invalido Con su mensaje de error
    if (fRegister.invalid) {

      Swal.fire({
        icon: 'error',
        title: 'Verifique los campos requeridos',
        timer: 1500,
        showConfirmButton: false,
      });
      // this.alert.infoAlert('Verifique los campos requeridos');
    }
    // Envio del formulario al servicio
    this.auth.register(this.registerUser).subscribe( (resp: any) => {
      console.log('resp desde ts', resp);
      // Condicion si el Correo ya esta registrado en la DB //****Nota: message no es un error.
      if (resp.message === 'Usuario ya se encuentra registrado!') {
        Swal.fire({
          icon: 'error',
          title: 'El email ya se encuentra registrado',
          timer: 1500,
          showConfirmButton: false,
        });
      } else if (resp.message === 'Usuario creado correctamente.!' ) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado, Bienvenido',
          timer: 1500,
          showConfirmButton: false,
        });
        this.NavCtrl.navigateRoot(['/home-client'], { animated: true} );
      }
    });

  }

  adelante() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }

  atras() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

}
