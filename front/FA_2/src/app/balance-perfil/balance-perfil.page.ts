import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-perfil',
  templateUrl: './balance-perfil.page.html',
  styleUrls: ['./balance-perfil.page.scss'],
})
export class BalancePerfilPage implements OnInit {

  public transacciones : Object[];

  constructor() { }

  ngOnInit() {
  }

}
