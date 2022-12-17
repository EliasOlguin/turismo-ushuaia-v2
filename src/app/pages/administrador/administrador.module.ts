import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AdministradorModule { }
