import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearPerfilAlumPage } from './crear-perfil-alum.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPerfilAlumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearPerfilAlumPage]
})
export class CrearPerfilAlumPageModule {}
