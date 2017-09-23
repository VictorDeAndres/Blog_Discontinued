import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-hosting-expressjs-firebase',
  templateUrl: './hosting-expressjs-firebase.component.html',
  styleUrls: ['./../post.common.component.scss']
})

@Directive({
    selector: 'code[ highlight]' // css selector for the attribute
})

export class HostingExpressJsFirebaseComponent implements OnInit {

  titlepost: string = 'Hosting de un proyecto ExpressJS en Firebase';
  publishDate: string = '11 de Agosto 2017';
  postCategories: string[] = ['ExpressJS','Firebase','WebApps'];
  
  dbcomments: FirebaseListObservable<any[]>;
  postComments: object[] = [];

  constructor(
    private db: AngularFireDatabase,
    private eltRef:ElementRef,
  ){ 
    this.dbcomments = db.list(`${this.titlepost}`);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}