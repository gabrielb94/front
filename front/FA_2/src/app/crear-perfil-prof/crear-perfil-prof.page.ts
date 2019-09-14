import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-perfil-prof',
  templateUrl: './crear-perfil-prof.page.html',
  styleUrls: ['./crear-perfil-prof.page.scss'],
})
export class CrearPerfilProfPage implements OnInit {

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
    this.router.navigateByUrl("/home-prof");
  }

}
