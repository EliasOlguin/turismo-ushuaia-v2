import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { MaterialModule } from 'src/app/material/material.module';
import { MatIconModule } from '@angular/material/icon';
import { ProductosInfoComponent } from './productos-info/productos-info.component';
import { ProductoFormComponent } from './productos-info/producto-form/producto-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { UsuariosInfoComponent } from './usuarios-info/usuarios-info.component';
import { UsuarioFormComponent } from './usuarios-info/usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    AdministradorComponent,
    HomeAdministradorComponent,
    ProductosInfoComponent,
    ProductoFormComponent,
    UsuariosInfoComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AdministradorRoutingModule 
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AdministradorModule { }
