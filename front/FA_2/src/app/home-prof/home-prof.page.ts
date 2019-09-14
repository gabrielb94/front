import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-prof',
  templateUrl: './home-prof.page.html',
  styleUrls: ['./home-prof.page.scss'],
})
export class HomeProfPage implements OnInit {

  public appPages = [
    {
      title: "Actividades",
      url: "null",
      icon: "fitness"
    },
    {
      title: "Transacciones",
      url: "/balance-perfil",
      icon: "clipboard"
    },
    {
      title: "Foro",
      url: "null",
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
