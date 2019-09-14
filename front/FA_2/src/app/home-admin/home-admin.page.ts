import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  public appPages = [
    {
      title: "Actividades",
      url: "/actividades",
      icon: "fitness"
    },
    {
      title: "Eventos",
      url: "/eventos",
      icon: "clipboard"
    },
    {
      title: "Alumnos",
      url: "/alumnos",
      icon: "clipboard"
    },
    {
      title: "Solicitudes",
      url: "/solicitudes",
      icon: "clipboard"
    },
    {
      title: "Transacciones",
      url: "/null",
      icon: "clipboard"
    },
    {
      title: "Reportes",
      url: "/null",
      icon: "clipboard"
    },
    {
      title: "Foros",
      url: "/foros",
      icon: "chatboxes"
    },
    {
      title: "Perfil",
      url: "null",
      icon: "options"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
