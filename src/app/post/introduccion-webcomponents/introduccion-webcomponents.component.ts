import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-introduccion-webcomponents',
  templateUrl: './introduccion-webcomponents.component.html',
  styleUrls: ['./../post.common.component.scss']
})


export class IntroduccionWebcomponentsComponent implements OnInit, AfterViewInit {

  titlepost = 'Introducción a los WebComponents';
  publishDate = '03 de Marzo 2018';
  url = 'introduccion-webcomponents';
  postCategories: string[] = ['WebComponents', 'WebApps'];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Introduccion a WebComponents');

    meta.addTags([
      { name: 'keywords', content: 'webcomponents webapp polymer x-tag'},
      { name: 'description', content: 'Introduccion a webcomponents.' },
      { name: 'robots', content: 'Index, Follow' }
    ]);

  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Introduccion a los WebComponents,
      "alternativeHeadline": "Introducción y caracteristicas de los WebComponents",
      "image": "https://victordeandres.es/assets/images/posts/webcomponents.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "webcomponents webapp polymer x-tag",
      "wordcount": "577",
      "url": "https://victordeandres.es/post/introduccion-webcomponents",
      "datePublished": "2018-03-03",
      "dateCreated": "2018-03-03",
      "dateModified": "2018-03-03",
      "description": "Introduccion y principales caracteristicas de los webcomponents",
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

