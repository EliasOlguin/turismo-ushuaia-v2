import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { ProductosInfoComponent } from './productos-info/productos-info.component';
import { ProductoFormComponent } from './productos-info/producto-form/producto-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdministradorComponent,
    HomeComponent,
    // ExcursionesInfoComponent,
    ProductosInfoComponent,
    ProductoFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AdministradorModule { }
