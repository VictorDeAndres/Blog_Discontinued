import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
  ) {
    title.setTitle('Fundamentos Javascript - Hoisting');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'javascript js fundamentos introduccion hoisting '},
      { name: 'description', content: 'Fundamentos de JavaScript. Definicion e introduccion hoisting' }
    ]);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }

}



