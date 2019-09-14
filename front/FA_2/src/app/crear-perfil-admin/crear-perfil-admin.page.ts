import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-perfil-admin',
  templateUrl: './crear-perfil-admin.page.html',
  styleUrls: ['./crear-perfil-admin.page.scss'],
})
export class CrearPerfilAdminPage implements OnInit {

  constructor(private toastController : ToastController,
              private router : Router) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Perfil creado !',
      duration: 1000,
      position: 'top'
    });
    toast.present();
    this.navigate();
  }

  navigate(){
    this.router.navigateByUrl("/home-admin");
  }

}