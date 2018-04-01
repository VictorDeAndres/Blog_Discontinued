import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-javascript-hoisting',
  templateUrl: './javascript-hoisting.component.html',
  styleUrls: ['./../post.common.component.scss']
})
export class JavascriptHoistingComponent implements OnInit, AfterViewInit {

  titlepost = 'Fundamentos Javascript - Hoisting';
  url = 'javascript-hoisting';
  publishDate = '3 de Enero 2018';
  postCategories: string[] = ['Fundamentos', 'Javascript'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
    title.setTitle('Fundamentos Javascript - Hoisting');

    meta.addTags([
      { name: 'keywords', content: 'javascript js fundamentos introduccion hoisting '},
      { name: 'description', content: 'Fundamentos de JavaScript. Definicion e introduccion hoisting' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = this._renderer2.createElement('script');
    scriptLdJson.type = `application/ld+json`;
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Fundamentos Javascript - Hoisting",
      "alternativeHeadline": "Fundamentos Javascript - Definición Hoisting",
      "image": "https://victordeandres.es/assets/images/posts/javascript_hoisting.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "javascript js fundamentos introduccion hoisting",
      "wordcount": "475",
      "url": "https://victordeandres.es/post/javascript-hoisting",
      "datePublished": "2017-07-08",
      "dateCreated": "2017-07-08",
      "dateModified": "2017-07-08",
      "description": "Fundamentos de JavaScript. Definicion e introduccion hoisting",
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



