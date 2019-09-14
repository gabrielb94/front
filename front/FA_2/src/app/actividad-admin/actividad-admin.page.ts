import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad-admin',
  templateUrl: './actividad-admin.page.html',
  styleUrls: ['./actividad-admin.page.scss'],
})
export class ActividadAdminPage implements OnInit {

  public appPages = [
    {
      title: "Transacciones",
      url: "/null",
      icon: "clipboard"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
