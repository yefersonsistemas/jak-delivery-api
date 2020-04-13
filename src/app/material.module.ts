import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule} from '@angular/material';


@NgModule({
  declarations: [],
  exports:[
    MatFormFieldModule,
    MatInputModule
  ],
  imports: [
    CommonModule,
  ]
})
export class MaterialModule { }
