import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {

  public transacciones = [
    {
      fecha: "11-11-11",
      concepto: "concepto A",
      monto: "1000"
    },
    {
      fecha: "44-11-11",
      concepto: "concepto B",
      monto: "555"
    },
    {
      fecha: "11-22-22",
      concepto: "concepto C",
      monto: "90"
    },
    {
      fecha: "98-55-11",
      concepto: "concepto D",
      monto: "457"
    },
    {
      fecha: "11-65-11",
      concepto: "concepto E",
      monto: "4"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
