import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const Material = [
  MatToolbarModule, 
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatDialogModule,
  FormsModule,
  MatButtonToggleModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [...Material],
  exports: [...Material],
})
export class MaterialModule {}
