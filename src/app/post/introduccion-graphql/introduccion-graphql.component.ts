import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';

// import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-introduccion-graphql',
  templateUrl: './introduccion-graphql.component.html',
  styleUrls: ['./../post.common.component.scss']
})

// @Directive({
//     selector: 'code[ highlight]' // css selector for the attribute
// })

export class IntroduccionGraphqlComponent implements OnInit, AfterViewInit {

  titlepost = 'Introducción a GraphQL';
  publishDate = '09 de Septiembre 2017';
  postCategories: string[] = ['GraphQL', 'WebApps'];
  //   dbcomments: FirebaseListObservable<any[]>;
  postComments: object[] = [];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
  ) {
    // this.dbcomments = db.list(`${this.titlepost}`);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
