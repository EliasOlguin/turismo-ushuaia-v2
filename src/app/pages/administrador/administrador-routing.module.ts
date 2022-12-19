import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdministradorComponent } from './administrador.component';
import { HomeAdministradorComponent } from './home-administrador/home-administrador.component';
import { ProductosInfoComponent } from './productos-info/productos-info.component';

const routes: Routes = [
  {
    path: 'administrador',
    component: AdministradorComponent,
    children: [
      {
        path: 'home',
        component: HomeAdministradorComponent,
        loadChildren: () =>
          import('./home-administrador/home-administrador.module').then((m)=>m.HomeAdministradorModule)
      },
      {
        path: 'excursiones',
        component: ProductosInfoComponent,
        loadChildren: () =>
          import('./productos-info/productos-info.module').then((m)=>m.ProductosInfoModule)
      },
    ],
  },
//   {
//     path: '**',
//     component: PageNotFoundComponent,
//   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
