import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-alum',
  templateUrl: './home-alum.page.html',
  styleUrls: ['./home-alum.page.scss'],
})
export class HomeAlumPage implements OnInit {

  public appPages = [
    {
      title: "Mis actividades",
      url: "null",
      icon: "fitness"
    },
    {
      title: "Mis planes",
      url: "null",
      icon: "options"
    },
    {
      title: "Inscribirme",
      url: "null",
      icon: "clipboard"
    },
    {
      title: "Foro",
      url: "null",
      icon: "chatboxes"
    },
    {
      title: "Transacciones",
      url: "null",
      icon: "cash"
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
