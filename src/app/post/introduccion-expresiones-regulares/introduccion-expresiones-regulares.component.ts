import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
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
      { name: 'keywords', content: 'expresiones regulares regex'},
      { name: 'description', content: 'Introduccion a las expresiones regulares regex en javascript' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }

}







