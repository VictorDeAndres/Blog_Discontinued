import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-hosting-expressjs-firebase',
  templateUrl: './hosting-expressjs-firebase.component.html',
  styleUrls: ['./../post.common.component.scss']
})


export class HostingExpressJsFirebaseComponent implements OnInit, AfterViewInit {

  titlepost = 'Hosting de un proyecto ExpressJS en Firebase';
  publishDate = '11 de Agosto 2017';
  postCategories: string[] = ['ExpressJS', 'Firebase', 'WebApps'];
  postComments: object[] = [];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Hosting de un proyecto ExpressJS en Firebase');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'angular firebase hosting express nodejs'},
      { name: 'description', content: 'Manual para realizar hosting de una aplicacion desarrollada en nodeJs con Express en firebase.' }
    ]);

  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
