import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
  ) {
    title.setTitle('Webpack en tus proyectos Angular');
    meta.addTags([
      { name: 'keywords', content: 'angular angularjs webapp webpack eject spa angular-cli'},
      { name: 'description', content: 'Angular tip para utilizar webpack en los aplicativos angular generados desde el asistente angular-cli' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }

}
