import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NavBarModule } from './pages/nav-bar/nav-bar.module';
import { ContainerAppComponent } from './pages/container-app/container-app.component';
import { ExcursionesComponent } from './pages/excursiones/excursiones.component';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginModule } from './pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { AdministradorModule } from './pages/administrador/administrador.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ContainerAppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoginModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
