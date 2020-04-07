import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  menuOpts =  [
    {
    name: 'Inicio',
    icon: 'home',
    redirecTo: '/home-client'
    },

];

  constructor(private auth: AuthService, private navCtrl: NavController) { }

  ngOnInit() {}

  logout() {
    this.auth.logout();

    this.navCtrl.navigateRoot(['/login'], {animated: true} );
    Swal.fire({
      icon: 'success',
      title: 'Sesion Cerrada',
      timer: 1500,
      showConfirmButton: false,
    });
  }

}
