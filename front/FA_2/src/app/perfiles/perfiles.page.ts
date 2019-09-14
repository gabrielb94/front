import { Component, OnInit } from '@angular/core';
import { Perfil } from '../interfaces/perfil';
import { GetPerfilesService } from '../services/get-perfiles.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {

  public perfiles =  new Array<Perfil>();

  public flag_hayPerfiles : number = this.perfiles.length;

  constructor(private getPerfilesService: GetPerfilesService) { }

  ngOnInit() {
    this.getPerfiles();
  }

  getPerfiles() {
    this.getPerfilesService.getPerfiles().subscribe((data: Perfil[]) => this.perfiles = data);
  }
}