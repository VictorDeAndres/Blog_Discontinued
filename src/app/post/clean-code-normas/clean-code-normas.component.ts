import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as hljs from 'highlight.js';

@Component({
  selector: 'app-clean-code-normas',
  templateUrl: './clean-code-normas.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class CleanCodeNormasComponent implements  OnInit, AfterViewInit {

  titlepost = 'Introduccion Clean Code (I)';
  publishDate = '07 de Octubre 2017';
  url = 'clean-code-normas';
  postCategories: string[] = ['Fundamentos', 'Buenas Practicas'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Clean Code - Normas');

    meta.addTags([
      { name: 'keywords', content: 'clean code buenas practicas fundamentos'},
      { name: 'description', content: 'Introduccion al Clean Code. Introducción a las normas' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Introduccion a Clean Code",
      "alternativeHeadline": "Introducción a Clean Code - Las normas",
      "image": "https://victordeandres.es/assets/images/posts/CleanCode.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "clean code buenas practicas fundamentos",
      "wordcount": "1023",
      "url": "https://victordeandres.es/post/clean-code-normas",
      "datePublished": "2017-10-07",
      "dateCreated": "2017-10-07",
      "dateModified": "2017-10-07",
      "description": "Introduccion al Clean Code. Introducción a las normas",
      "author": {
        "@type": "Person",
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
