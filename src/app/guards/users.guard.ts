import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UsersGuard implements CanActivate, CanLoad { //

  constructor(private auth: AuthService, private navCtrl: NavController) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      console.log('token en el guard', this.auth.isAuthenticated());
      return true;
    } else {
      this.navCtrl.navigateRoot('/login', {animated: true});
      return false;
    }
    // return false;
  }
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.navCtrl.navigateRoot('/login', {animated: true});
      return false;
    }
    // return false;
  }
}
