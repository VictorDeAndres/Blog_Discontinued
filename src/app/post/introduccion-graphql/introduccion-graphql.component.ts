import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as hljs from 'highlight.js';

@Component({
  selector: 'app-introduccion-graphql',
  templateUrl: './introduccion-graphql.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class IntroduccionGraphqlComponent implements OnInit, AfterViewInit {

  titlepost = 'Introducción a GraphQL';
  publishDate = '09 de Septiembre 2017';
  postCategories: string[] = ['GraphQL', 'WebApps'];
  postComments: object[] = [];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Hosting de un proyecto ExpressJS en Firebase');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'angular firebase api rest graphql spa'},
      { name: 'description', content: 'Introduccion a Graphql para realizar consultas sustituyendo a api rest' },
      { name: 'robots', content: 'Index, NoFollow' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
