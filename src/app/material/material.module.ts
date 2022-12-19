import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule} from '@angular/material/button-toggle'
import { MatButtonModule} from '@angular/material/button'

const Material = [MatToolbarModule, MatIconModule, FormsModule, MatButtonToggleModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [...Material],
  exports: [...Material],
})
export class MaterialModule {}
