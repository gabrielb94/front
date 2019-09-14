import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostLoginService {

  constructor(private http: HttpClient) { }

  postLogin(username: string, password: string) {
    return this.http.post("http://localhost:8080/api/login", {
      username: username,
      password: password
    });
  }
}