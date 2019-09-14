import { Component, OnInit } from '@angular/core';
import { Actividad } from '../interfaces/actividad';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})
export class EventosPage implements OnInit {

  public eventos : Actividad[];

  constructor() { }

  ngOnInit() {
  }

}
