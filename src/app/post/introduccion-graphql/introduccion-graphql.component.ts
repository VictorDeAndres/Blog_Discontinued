import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';


import * as hljs from 'highlight.js';

@Component({
  selector: 'app-introduccion-graphql',
  templateUrl: './introduccion-graphql.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class IntroduccionGraphqlComponent implements OnInit, AfterViewInit {

  titlepost = 'Introducción a GraphQL';
  publishDate = '09 de Septiembre 2017';
  url = 'introduccion-graphql';
  postCategories: string[] = ['GraphQL', 'WebApps'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
    title.setTitle('Introduccion a GraphQL');

    meta.addTags([
      { name: 'keywords', content: 'api rest graphql spa'},
      { name: 'description', content: 'Introduccion a Graphql para realizar consultas sustituyendo a api rest' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = this._renderer2.createElement('script');
    scriptLdJson.type = `application/ld+json`;
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Introducción a GraphQL",
      "alternativeHeadline": "Introducción a GrapghQL. Un lenguaje de consultas para tu API Rest",
      "image": "https://victordeandres.es/assets/images/posts/graphql.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "api rest graphql spa",
      "wordcount": "1056",
      "url": "https://victordeandres.es/post/introduccion-graphql",
      "datePublished": "2017-09-09",
      "dateCreated": "2017-09-09",
      "dateModified": "2017-09-09",
      "description": "Introduccion a Graphql para realizar consultas sustituyendo a api rest",
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

    this._renderer2.appendChild(this._document.body, scriptLdJson);
  }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
