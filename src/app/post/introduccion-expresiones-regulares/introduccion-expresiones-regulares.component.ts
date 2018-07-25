import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-introduccion-expresiones-regulares',
  templateUrl: './introduccion-expresiones-regulares.component.html',
  styleUrls: ['./../post.common.component.scss']
})
export class IntroduccionExpresionesRegularesComponent implements OnInit, AfterViewInit {

  titlepost = 'Introducción a expresiones regulares';
  publishDate = '4 de Febrero 2018';
  url = 'introduccion-expresiones-regulares';
  postCategories: string[] = ['Desarrollo', 'Fundamentos', 'Javascript'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Introducción a expresiones regulares (RegEx) en JS');

    meta.addTags([
      { name: 'keywords', content: 'expresiones regulares regex js javascript'},
      { name: 'description', content: 'Introduccion a las expresiones regulares regex en javascript' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Introducción a expresiones regulares (RegEx) en JS",
      "alternativeHeadline": "introducción a las reglas para utilizar expresiones regulares en JavaScript",
      "image": "https://victordeandres.es/assets/images/posts/regular_expresion.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "expresiones regulares regex js javascript",
      "wordcount": "1257",
      "url": "https://victordeandres.es/post/introduccion-expresiones-regulares",
      "datePublished": "2018-02-04",
      "dateCreated": "2018-02-04",
      "dateModified": "2018-02-04",
      "description": "Introduccion a las expresiones regulares regex en javascript",
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







