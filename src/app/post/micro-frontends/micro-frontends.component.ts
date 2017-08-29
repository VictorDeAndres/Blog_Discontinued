import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-micro-frontends',
  templateUrl: './micro-frontends.component.html',
  styleUrls: ['./../post.common.component.scss']
})
export class MicroFrontendsComponent implements OnInit {

  titlepost: string = 'Enfoque de microservicios para el desarrollo web front-end';
  constructor() { }

  ngOnInit() {
  }

}
