import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { Posts } from './posts';
import { POSTS } from './data/mock-posts';

@Injectable()
export class PostsService {

  dbitem: FirebaseListObservable<any>;
  posts: Array<any> = [];

  constructor(    
    db: AngularFireDatabase
  ){ 
    this.dbitem = db.list('/posts', { preserveSnapshot: true });
  }

  loadPost(): void {
    this.dbitem.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.posts.push(snapshot.val());
        console.info(snapshot.val());
      });
    });  
  }

  getPosts(): Array<any> {
    return this.posts;
  } 

}

