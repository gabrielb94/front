import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../interfaces/perfil';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetPerfilesService {

  constructor(private http : HttpClient) { }

  getPerfiles() : Observable<Perfil[]>{
    return this.http.get<Perfil[]>("http://localhost:8089/fa/get");
  }
}
