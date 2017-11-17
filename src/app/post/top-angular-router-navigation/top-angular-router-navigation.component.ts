import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import {PostPublishInfoComponent} from '../../post-publish-info/post-publish-info.component';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-top-angular-router-navigation',
  templateUrl: './top-angular-router-navigation.component.html',
  styleUrls: ['./../post.common.component.scss']
})
export class TopAngularRouterNavigationComponent implements OnInit, AfterViewInit {

  titlepost = 'Posiciona vista al inicio nueva pagina Angular';
  publishDate = '26 de Agosto 2017';
  url = 'top-angular-router-navigation';
  postCategories: string[] = ['Angular', 'Tips'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Posiciona vista al inicio nueva pagina Angular');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'angular tips webapp posicion pagina spa'},
      { name: 'description', content: 'Angular tip para situar la pagina al inico de pantalla cuando se cambia de ruta' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }

}


