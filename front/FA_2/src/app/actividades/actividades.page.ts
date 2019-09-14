import { Component, OnInit } from '@angular/core';
import { Actividad } from '../interfaces/actividad';
import { GetActividadesService } from '../services/get-actividades.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  public activities : Actividad[];

  constructor(private getActividadesService : GetActividadesService) { }

  ngOnInit() {
    this.getActividadesService.getActividades(2).subscribe(data => this.activities = data);
  }
}