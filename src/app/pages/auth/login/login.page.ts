import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertserviceService } from '../../../services/alertservice.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {

    email: '',
    password: '',
    role: 'client',
  };

  constructor(private auth: AuthService, private alert: AlertserviceService, private NavCtrl: NavController) { }

  ngOnInit() {
  }

  async login(fLogin: NgForm) {

    if (fLogin.invalid) { this.alert.infoAlert('Ingrese el Email y/o Password'); }
    console.log(fLogin.valid);
    console.log(this.loginUser);

    this.auth.login(this.loginUser.email, this.loginUser.password, this.loginUser.role);
    this.NavCtrl.navigateRoot(['/main/tabs/tab1', { animated : true } ]);

    // if (valid) {
    // } else {
      // this.alert.infoAlert('Usuario y/o Password es Incorrecto');
    // }
  }

}
