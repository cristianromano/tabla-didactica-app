import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'color/:id',
    loadChildren: () =>
      import('./color/color.module').then((m) => m.ColorPageModule),
  },
  {
    path: 'numeros/:id',
    loadChildren: () =>
      import('./numeros/numeros.module').then((m) => m.NumerosPageModule),
  },
  {
    path: 'animales',
    loadChildren: () => import('./animales/animales.module').then( m => m.AnimalesPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
