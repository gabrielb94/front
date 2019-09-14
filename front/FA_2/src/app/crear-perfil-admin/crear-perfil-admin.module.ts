import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrearPerfilAdminPage } from './crear-perfil-admin.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPerfilAdminPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrearPerfilAdminPage]
})
export class CrearPerfilAdminPageModule {}
