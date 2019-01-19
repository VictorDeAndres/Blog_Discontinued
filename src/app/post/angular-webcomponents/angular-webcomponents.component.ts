import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-angular-webcomponents',
  templateUrl: './angular-webcomponents.component.html',
  styleUrls: ['./../post.common.component.scss']
})


export class AngularWebcomponentsComponent implements OnInit, AfterViewInit {

  titlepost = 'Desarrollo de WebComponents con Angular, @angular/elements';
  publishDate = '17 de Noviembre 2018';
  url = 'angular-webcomponents';
  postCategories: string[] = ['Angular', 'Desarrollo', 'WebComponents', 'WebApps'];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Desarrollo de WebComponents con Angular, @angular/elements');

    meta.addTags([
      { name: 'keywords', content: '@angular\elements angular webcomponents webapp'},
      { name: 'description', content: 'Desarrollo de WebComponents con Angular, @angular/elements' },
      { name: 'robots', content: 'Index, Follow' }
    ]);

  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Desarrollo de WebComponents con Angular, @angular/elements",
      "alternativeHeadline": "Tutorial para desarrollar webComponents reutilizables con @angular/elements",
      "image": "https://victordeandres.es/assets/images/posts/webcomponents.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "Desarrollo de WebComponents con Angular, @angular/elements",
      "wordcount": "1114",
      "url": "https://victordeandres.es/post/angular-webcomponents",
      "datePublished": "2018-11-17",
      "dateCreated": "2018-11-17",
      "dateModified": "2018-11-17",
      "description": "Desarrollo paso a paso de webcomponets con @angular/elements",
      "author": {
        "@type": "Person",
        "name": "Victor de Andres"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Victor de Andres",
        "logo": {
        "@type": "imageObject",
        "url": "https://victordeandres.es/assets/images/LogoFondoBlanco.png"
        }
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

