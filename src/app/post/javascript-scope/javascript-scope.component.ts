import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-javascript-scope',
  templateUrl: './javascript-scope.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class JavascriptScopeComponent implements OnInit, AfterViewInit {

  titlepost = 'Fundamentos Javascript - Scope';
  publishDate = '10 de Noviembre 2017';
  postCategories: string[] = ['Fundamentos', 'Javascript'];
  postComments: object[] = [];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Fundamentos Javascript - Scope');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'javascript js fundamentos introduccion definicion scope '},
      { name: 'description', content: 'Fundamentos de JavaScript. Definicion y tipos scope. Global, local, function, lexical, block statments' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
