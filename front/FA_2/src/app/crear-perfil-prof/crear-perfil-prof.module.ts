import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearPerfilProfPage } from './crear-perfil-prof.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPerfilProfPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearPerfilProfPage]
})
export class CrearPerfilProfPageModule {}
