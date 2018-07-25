import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as hljs from 'highlight.js';

@Component({
  selector: 'app-javascript-scope',
  templateUrl: './javascript-scope.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class JavascriptScopeComponent implements OnInit, AfterViewInit {

  titlepost = 'Fundamentos Javascript - Scope';
  url = 'javascript-scope';
  publishDate = '10 de Noviembre 2017';
  postCategories: string[] = ['Fundamentos', 'Javascript'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Fundamentos Javascript - Scope');

    meta.addTags([
      { name: 'keywords', content: 'javascript js fundamentos introduccion definicion scope '},
      // tslint:disable-next-line:max-line-length
      { name: 'description', content: 'Fundamentos de JavaScript. Definicion y tipos scope. Global, local, function, lexical, block statments' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Fundamentos Javascript - Scope",
      "alternativeHeadline": "Fundamentos Javascript. Definición y tipos de Scope",
      "image": "https://victordeandres.es/assets/images/posts/javascript_scope.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "javascript js fundamentos introduccion definicion scope",
      "wordcount": "1275",
      "url": "https://victordeandres.es/post/javascript-scope",
      "datePublished": "2017-11-10",
      "dateCreated": "2017-11-10",
      "dateModified": "2017-11-10",
      "description": "Fundamentos de JavaScript. Definicion y tipos scope. Global, local, function, lexical, block statments",
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
