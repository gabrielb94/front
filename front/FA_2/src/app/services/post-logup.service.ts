import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostLogupService {

  constructor(private http: HttpClient) { }

  postlogup(username: string, password: string, name: string, lastname: string, email: string, ) {
    return this.http.post("http://localhost:8080/api/user",
      {
        username: username,
        password: password,
        name: name,
        lastname: lastname,
        email: email
      });
  }
}