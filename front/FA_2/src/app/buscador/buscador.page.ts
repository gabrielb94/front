import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  public entidades = [
    {
      name: "Alpha",
      zone: "Nueva Cordoba",
      actions: "x - y - z"
    },
    {
      name: "Beta",
      zone: "Pueyrredon",
      actions: "x - y - z"
    },
    {
      name: "Gamma",
      zone: "Cerro de las rosas",
      actions: "x - y - z"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
