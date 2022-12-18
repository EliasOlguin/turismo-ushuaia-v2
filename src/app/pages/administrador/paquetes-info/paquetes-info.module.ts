import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaquetesInfoComponent } from './paquetes-info.component';
import { PaqueteFormComponent } from './paquete-form/paquete-form.component';



@NgModule({
  declarations: [
    PaquetesInfoComponent,
    PaqueteFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaquetesInfoModule { }
