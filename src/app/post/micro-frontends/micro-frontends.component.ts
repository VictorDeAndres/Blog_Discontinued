import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-micro-frontends',
  templateUrl: './micro-frontends.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class MicroFrontendsComponent implements OnInit {

  titlepost = 'Micro FrontEnds';
  publishDate = '24 de Julio 2017';
  url = 'micro-frontends';
  postCategories: string[] = ['WebApps'];

  postComments: object[] = [];

  constructor(
    meta: Meta, title: Title,
  ) {
    title.setTitle('Micro FrontEnds');

    meta.addTags([
      { name: 'keywords', content: 'angular webapp micro frontend microfrontend microservicio react jquery vuejs vue spa'},
      { name: 'description', content: 'Introduccion a desarrollo de aplicaciones web con micro frontends' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Micro FrontEnds",
      "alternativeHeadline": "Enfoque de microservicios para el desarrollo web front-end",
      "image": "https://victordeandres.es/assets/images/posts/microfrontend.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "angular webapp micro frontend microfrontend microservicio react jquery vuejs vue spa",
      "wordcount": "442",
      "url": "https://victordeandres.es/post/micro-frontends",
      "datePublished": "2017-07-24",
      "dateCreated": "2017-07-24",
      "dateModified": "2017-07-24",
      "description": "Introduccion a desarrollo de aplicaciones web con micro frontends",
      "author": {
        "@type": "Person",
        "name": "Victor de Andres"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Victor de Andres"
      },
      "mainEntityOfPage": "https://victordeandres.es/post"
      }
    `;
    scriptLdJson.type = 'application/ld+json';
    document.getElementsByTagName('head')[0].appendChild(scriptLdJson)
  }

}
