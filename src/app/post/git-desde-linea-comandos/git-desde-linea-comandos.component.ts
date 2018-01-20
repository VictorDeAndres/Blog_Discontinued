import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-git-desde-linea-comandos',
  templateUrl: './git-desde-linea-comandos.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class GitDesdeLineaComandosComponent implements OnInit, AfterViewInit {
  titlepost = 'Git desde la linea de comandos';
  publishDate = '20 de Enero 20187';
  url = 'git_desde_linea_comandos';
  postCategories: string[] = ['Git', 'Fudamentos', 'Desarrollo'];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Git desde la linea de comandos');

    meta.addTags([
      { name: 'keywords', content: 'comandos git'},
      { name: 'description', content: 'Comandos para utilizar git desde la linea de comandos' },
      { name: 'robots', content: 'Index, Follow' }
    ]);

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
