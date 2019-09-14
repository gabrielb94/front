import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../services/post-login.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public username: string;
  public password: string;

  constructor(
    private postLoginService: PostLoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  postlogin() {
    this.postLoginService.postLogin(this.username, this.password).subscribe(
      data => this.navigate(data));
  }

  navigate(res: Object) {
    let user = res as User;
    if (user != null) {
      this.router.navigateByUrl("/principal");
    }
  }
}