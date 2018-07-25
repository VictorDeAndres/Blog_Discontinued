import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-hosting-expressjs-firebase',
  templateUrl: './hosting-expressjs-firebase.component.html',
  styleUrls: ['./../post.common.component.scss']
})


export class HostingExpressJsFirebaseComponent implements OnInit, AfterViewInit {

  titlepost = 'Hosting de un proyecto ExpressJS en Firebase';
  publishDate = '11 de Agosto 2017';
  url = 'hosting-expressjs-firebase';
  postCategories: string[] = ['ExpressJS', 'Firebase', 'WebApps'];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Hosting de un proyecto ExpressJS en Firebase');

    meta.addTags([
      { name: 'keywords', content: 'angular firebase hosting express nodejs'},
      { name: 'description', content: 'Manual para realizar hosting de una aplicacion desarrollada en nodeJs con Express en firebase.' },
      { name: 'robots', content: 'Index, Follow' }
    ]);

  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Hosting de un proyecto ExpressJS en Firebase",
      "alternativeHeadline": "Habilita webpack en tus proyectos Angular 2+",
      "image": "https://victordeandres.es/assets/images/posts/firebase_express.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "angular firebase hosting express nodejs",
      "wordcount": "847",
      "url": "https://victordeandres.es/post/hosting-expressjs-firebase",
      "datePublished": "2017-08-11",
      "dateCreated": "2017-08-11",
      "dateModified": "2017-08-11",
      "description": "Manual para realizar hosting de una aplicacion desarrollada en nodeJs con Express en firebase",
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
    document.getElementsByTagName('head')[0].appendChild(scriptLdJson);
  }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
