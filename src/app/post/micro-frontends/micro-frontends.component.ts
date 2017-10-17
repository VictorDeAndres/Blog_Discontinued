import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-micro-frontends',
  templateUrl: './micro-frontends.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class MicroFrontendsComponent implements OnInit {

  titlepost = 'Micro FrontEnds';
  publishDate = '24 de Julio 2017';
  postCategories: string[] = ['WebApps'];

  postComments: object[] = [];

  constructor(
    meta: Meta, title: Title,
  ) {
    title.setTitle('Micro FrontEnds');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'angular webapp micro frontend microfrontend microservicio react jquery vuejs vue spa'},
      { name: 'description', content: 'Introduccion a desarrollo de aplicaciones web con micro frontends' },
      { name: 'robots', content: 'Index, NoFollow' }
    ]);
  }

  ngOnInit() { }

}
