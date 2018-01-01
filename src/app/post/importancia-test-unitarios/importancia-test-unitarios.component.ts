import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as hljs from 'highlight.js';

@Component({
  selector: 'app-importancia-test-unitarios',
  templateUrl: './importancia-test-unitarios.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class ImportanciaTestUnitariosComponent implements OnInit, AfterViewInit {

  titlepost = 'La importancia de los test unitarios';
  publishDate = '27 de Octubre 2017';
  url = 'importancia-test-unitarios';
  postCategories: string[] = ['Fundamentos', 'Unit Test'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Hosting de un proyecto ExpressJS en Firebase');

    meta.addTags([
      { name: 'keywords', content: 'clean code buenas practicas test unitarios unit test'},
      { name: 'description', content: 'La importancia de realizar test unitarios. Ventajas de realizar test unitarios en los desarrollos' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
