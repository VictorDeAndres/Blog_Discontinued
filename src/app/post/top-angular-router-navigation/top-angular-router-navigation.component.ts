import { Component, OnInit } from '@angular/core';
import {Directive, ElementRef, AfterViewInit} from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {PostPublishInfoComponent} from '../../post-publish-info/post-publish-info.component';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-top-angular-router-navigation',
  templateUrl: './top-angular-router-navigation.component.html',
  styleUrls: ['./../post.common.component.scss']
})
export class TopAngularRouterNavigationComponent implements OnInit {

  titlepost: string = 'Posiciona vista al inicio nueva pagina Angular';
  publishDate: string = '26 de Agosto 2017';
  postCategories: string[] = ['Angular', 'Tips'];

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


