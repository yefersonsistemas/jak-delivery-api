import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertserviceService {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) { }

  async infoAlert(message: string) {
    const alert = await this.alertCtrl.create({
      message,
      buttons: ['Aceptar']
    });

    await alert.present();
  }


}
