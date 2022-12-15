import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const Material = [MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [...Material],
  exports: [...Material],
})
export class MaterialModule {}
