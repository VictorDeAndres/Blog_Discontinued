import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title, DOCUMENT } from '@angular/platform-browser';

import {PostPublishInfoComponent} from '../../post-publish-info/post-publish-info.component';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-webpack-en-tus-proyectos-angular',
  templateUrl: './webpack-en-tus-proyectos-angular.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class WebpackEnTusProyectosAngularComponent implements OnInit, AfterViewInit {

  titlepost = 'Webpack en tus proyectos Angular';
  publishDate = '08 de Julio 2017';
  url = 'webpack-en-tus-proyectos-angular';
  postCategories: string[] = ['Angular', 'Webpack'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document
  ) {
    title.setTitle('Webpack en tus proyectos Angular');
    meta.addTags([
      { name: 'keywords', content: 'angular angularjs webapp webpack eject spa angular-cli'},
      // tslint:disable-next-line:max-line-length
      { name: 'description', content: 'Angular tip para utilizar webpack en los aplicativos angular generados desde el asistente angular-cli' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = this._renderer2.createElement('script');
    scriptLdJson.type = `application/ld+json`;
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Webpack en tus proyectos Angular",
      "alternativeHeadline": "Habilita webpack en tus proyectos Angular 2+",
      "image": "https://victordeandres.es/assets/images/posts/webpack-and-angularjs.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "angular angularjs webapp webpack eject spa angular-cli",
      "wordcount": "231",
      "url": "https://victordeandres.es/post/webpack-en-tus-proyectos-angular",
      "datePublished": "2017-07-08",
      "dateCreated": "2017-07-08",
      "dateModified": "2017-07-08",
      "description": "Angular tip para utilizar webpack en los aplicativos angular generados desde el asistente angular-cli",
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
