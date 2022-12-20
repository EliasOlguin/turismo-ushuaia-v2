import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ExcursionesModule } from '../excursiones/excursiones.module';
import { ExcursionesComponent } from '../excursiones/excursiones.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ExcursionesModule],
})
export class HomeModule {}
