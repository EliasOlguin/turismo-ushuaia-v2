import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ExcursionesComponent } from './pages/excursiones/excursiones.component';
import { ContainerAppComponent } from './pages/container-app/container-app.component';
import { LoginComponent } from './pages/login/login.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ProductosInfoComponent } from './pages/administrador/productos-info/productos-info.component';
import { HomeAdministradorComponent } from './pages/administrador/home-administrador/home-administrador.component';
import { UsuariosInfoComponent } from './pages/administrador/usuarios-info/usuarios-info.component';

const routes: Routes = [
  {
    path: 'main',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'excursiones',
        component: ExcursionesComponent,
        loadChildren: () =>
          import('./pages/excursiones/excursiones.module').then(
            (m) => m.ExcursionesModule
          ),
      },
      {
        path: 'producto/detalles/:id',
        component: ProductoDetalleComponent,
        loadChildren: () =>
          import('./pages/producto-detalle/producto-detalle.module').then(
            (m) => m.ProductoDetalleModule
          ),
      },
      {
        path: 'mi-cuenta',
        component: LoginComponent,
        loadChildren: () =>
          import('./pages/login/login.module').then((m=>m.LoginModule))
      },
    ],
  },
  {
    path: 'administrador',
    component: AdministradorComponent,
    children: [
      {
        path: 'home',
        component: HomeAdministradorComponent,
        loadChildren: () =>
        import('./pages/administrador/home-administrador/home-administrador.module').then((m)=>m.HomeAdministradorModule)
      },
      {
        path: 'excursiones',
        component: ProductosInfoComponent,
        loadChildren: () =>
        import('./pages/administrador/productos-info/productos-info.module').then((m)=>m.ProductosInfoModule)
      },
      {
        path: 'usuarios',
        component: UsuariosInfoComponent,
        loadChildren: () =>
        import('./pages/administrador/usuarios-info/usuarios-info.module').then((m)=>m.UsuariosInfoModule)
      },
      {
        path: '',
        component: HomeAdministradorComponent,
        loadChildren: () =>
        import('./pages/administrador/home-administrador/home-administrador.module').then((m)=>m.HomeAdministradorModule)
      },
    ],
  },
  {
    path: 'mi-cuenta',
    // component: AdministradorComponent,
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
