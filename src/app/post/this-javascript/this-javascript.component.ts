import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-this-javascript',
  templateUrl: './this-javascript.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class ThisJavascriptComponent implements OnInit {

  titlepost: string = '"This" en Javascript';
  dbcomments: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any>;
  postComments: object[] = [];

  constructor(
    db: AngularFireDatabase
  ){ 
    // this.dbcomments = db.list('/This_is', { preserveSnapshot: true });
    this.dbcomments = db.list(`${this.titlepost}`);
  }

  ngOnInit() { }

}
