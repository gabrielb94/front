import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-perfil-alum',
  templateUrl: './crear-perfil-alum.page.html',
  styleUrls: ['./crear-perfil-alum.page.scss'],
})
export class CrearPerfilAlumPage implements OnInit {

  constructor(private toastController: ToastController,
              private router : Router) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Solicitud enviada !',
      duration: 1000,
      position: 'top'
    });
    toast.present();
    this.navigate();
  }

  navigate(){
    this.router.navigateByUrl("/home-alum");
  }

}
