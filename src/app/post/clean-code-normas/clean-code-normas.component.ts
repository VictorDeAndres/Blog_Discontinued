import { Component, OnInit } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
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
  postCategories: string[] = ['Fundamentos', 'Buenas Practicas'];

  postComments: object[] = [];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Clean Code - Normas');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'clean code buenas practicas fundamentos'},
      { name: 'description', content: 'Introduccion al Clean Code. Introducción a las normas' },
      { name: 'robots', content: 'Index, NoFollow' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
