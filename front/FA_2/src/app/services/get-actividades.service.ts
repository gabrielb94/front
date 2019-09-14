import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../interfaces/actividad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetActividadesService {

  constructor(private http : HttpClient) { }

  getActividades(idEntity : number) : Observable<Actividad[]> {
    let url = 'http://localhost:9080/api/sportActivities/' + idEntity.toString();
    return this.http.get<Actividad[]>(url);
  }
}