import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-micro-frontends',
  templateUrl: './micro-frontends.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class MicroFrontendsComponent implements OnInit {

  titlepost: string = 'Micro FrontEnds';
  publishDate: string = '24 de Julio 2017';
  postCategories: string[] = ['WebApps'];
  
  dbcomments: FirebaseListObservable<any[]>;
  postComments: object[] = [];

  constructor(
    db: AngularFireDatabase
  ){ 
    this.dbcomments = db.list(`${this.titlepost}`);
  }

  ngOnInit() { }

}
