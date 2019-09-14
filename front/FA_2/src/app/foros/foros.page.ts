import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foros',
  templateUrl: './foros.page.html',
  styleUrls: ['./foros.page.scss'],
})
export class ForosPage implements OnInit {

  public foros = [
    {
      title : "Foro Zumba"
    },
    {
      title : "Foro CrossFit"
    },
    {
      title : "Foro Natacion"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
