import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  public appPages = [
    {
      title: 'Perfiles',
      url: '/perfiles',
      icon: 'people'
    },
    {
      title: 'Buscar',
      url: '/buscador',
      icon: 'search'
    },
    {
      title: 'Agenda',
      url: '/agenda',
      icon: 'calendar'
    },
    {
      title: 'Balance',
      url: '/balance',
      icon: 'cash'
    },
    {
      title: 'Cuenta',
      url: '/cuenta',
      icon: 'options'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}