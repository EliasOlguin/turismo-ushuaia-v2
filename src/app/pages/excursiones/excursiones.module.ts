import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcursionesComponent } from './excursiones.component';
import { ExcursionesCardComponent } from './excursiones-card/excursiones-card.component';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [ExcursionesComponent, ExcursionesCardComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ExcursionesComponent],
})
export class ExcursionesModule {}
