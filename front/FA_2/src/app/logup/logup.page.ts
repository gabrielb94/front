import { Component, OnInit } from '@angular/core';
import { PostLogupService } from '../services/post-logup.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.page.html',
  styleUrls: ['./logup.page.scss'],
})
export class LogupPage implements OnInit {

  public username: string;
  public password: string;
  public name: string;
  public lastname: string;
  public email: string;

  constructor(
    private postLogupService: PostLogupService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  postlogup() {
    this.postLogupService.postlogup(this.username, this.password, this.name, this.lastname, this.email)
      .subscribe((data: User) => this.navigate());
  }

  navigate() {
    this.router.navigateByUrl("/principal");
  }
}
