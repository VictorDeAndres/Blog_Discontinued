import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-importancia-test-unitarios',
  templateUrl: './importancia-test-unitarios.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class ImportanciaTestUnitariosComponent implements OnInit, AfterViewInit {

  titlepost = 'La importancia de los test unitarios';
  publishDate = '27 de Octubre 2017';
  url = 'importancia-test-unitarios';
  postCategories: string[] = ['Fundamentos', 'Unit Test'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
    title.setTitle('Importancia Test Unitarios');

    meta.addTags([
      { name: 'keywords', content: 'clean code buenas practicas test unitarios unit test'},
      { name: 'description', content: 'La importancia de realizar test unitarios. Ventajas de realizar test unitarios en los desarrollos' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = this._renderer2.createElement('script');
    scriptLdJson.type = `application/ld+json`;
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "La importancia de los test unitarios",
      "alternativeHeadline": "Ventajas de realizar test unitarios en los desarrollos",
      "image": "https://victordeandres.es/assets/images/posts/units_test.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "clean code buenas practicas test unitarios unit test",
      "wordcount": "882",
      "url": "https://victordeandres.es/post/importancia-test-unitarios",
      "datePublished": "2017-10-27",
      "dateCreated": "2017-10-27",
      "dateModified": "2017-10-27",
      "description": "La importancia de realizar test unitarios. Ventajas de realizar test unitarios en los desarrollos",
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
