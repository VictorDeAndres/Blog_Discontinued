import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';

// import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {PostPublishInfoComponent} from '../../post-publish-info/post-publish-info.component';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-webpack-en-tus-proyectos-angular',
  templateUrl: './webpack-en-tus-proyectos-angular.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class WebpackEnTusProyectosAngularComponent implements OnInit, AfterViewInit {

  titlepost = 'Webpack en tus proyectos Angular';
  publishDate = '08 de Julio 2017';
  postCategories: string[] = ['Angular', 'Webpack'];

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
