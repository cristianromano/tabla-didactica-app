import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';
import { HomePageModule } from 'src/app/home/home.module';
const routes: Routes = [
  {
    path: '',
    component: RegistroPage,
  },

  {
    path: 'home',
    loadChildren: () =>
      import('../../../home/home.module').then((m) => m.HomePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
