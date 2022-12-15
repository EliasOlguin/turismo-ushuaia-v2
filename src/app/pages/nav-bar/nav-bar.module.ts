import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HttpClientModule, RouterModule],
})
export class NavBarModule {}
