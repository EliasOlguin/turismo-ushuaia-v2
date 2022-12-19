import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ExcursionesComponent } from './pages/excursiones/excursiones.component';
import { ContainerAppComponent } from './pages/container-app/container-app.component';

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
    ],
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
