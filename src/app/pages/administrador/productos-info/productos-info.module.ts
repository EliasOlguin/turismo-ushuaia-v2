import {  NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosInfoComponent } from './productos-info.component';
import { ProductoFormComponent } from './producto-form/producto-form.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ProductosInfoModule { }
