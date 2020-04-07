import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SidemenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports:[SidemenuComponent]
})
export class ComponentsModule { }
