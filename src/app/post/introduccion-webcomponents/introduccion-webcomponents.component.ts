import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-introduccion-webcomponents',
  templateUrl: './introduccion-webcomponents.component.html',
  styleUrls: ['./../post.common.component.scss']
})


export class IntroduccionWebcomponentsComponent implements OnInit, AfterViewInit {

  titlepost = 'Introducción a los WebComponents';
  publishDate = '03 de Marzo 2018';
  url = 'introduccion-webcomponents';
  postCategories: string[] = ['WebComponents', 'WebApps'];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Introduccion a WebComponents');

    meta.addTags([
      { name: 'keywords', content: 'webcomponents webapp polymer x-tag'},
      { name: 'description', content: 'Introduccion a webcomponents.' },
      { name: 'robots', content: 'Index, Follow' }
    ]);

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}

