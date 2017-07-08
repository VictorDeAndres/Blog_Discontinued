import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class PostsService {

  dbposts: FirebaseListObservable<any>;
  dbcategories: FirebaseListObservable<any>;
  dbarchives: FirebaseListObservable<any>;
  posts: Array<any> = [];
  categories: Array<any> = [];
  archives: Array<any> = [];
  requestArchives: boolean = false;
  requestCategories: boolean = false;
  requestPosts: boolean = false;  

  constructor(    
    db: AngularFireDatabase
  ){ 
    this.dbposts = db.list('/posts', { preserveSnapshot: true });
    this.dbcategories = db.list('/categories', { preserveSnapshot: true });
    this.dbarchives = db.list('/archives', { preserveSnapshot: true });
  }

  loadPost() {
    var promise = new Promise((resolve, reject) => {
      this.dbposts.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.posts.push(snapshot.val());
          resolve(this.posts.length > 0 ? true : false);            
        });
      });
    });

    return promise;
  }

  loadCategories(){
    var promise = new Promise((resolve, reject) => {
      this.dbcategories.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.categories.push(snapshot.val());
          resolve(this.categories.length > 0 ? true : false);            
        });
      });
    });

    return promise;
  }

  loadArchives(){
    var promise = new Promise((resolve, reject) => {
      this.dbarchives.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          this.archives.push(snapshot.val());
          resolve(this.archives.length > 0  ? true : false);            
        });
      });
    });

    return promise;
  }

  loadAlldata(){

    console.info('Load All Data');
    const PROMISELOADPOST = this.loadPost();
    const PROMISELOADCATEGORIES = this.loadCategories();
    const PROMISELOADARCHIVE = this.loadArchives();

    var promise = new Promise((resolve, reject) => {
      Promise.all([
        PROMISELOADPOST,
        PROMISELOADCATEGORIES,
        PROMISELOADARCHIVE]
      ).then(responsesPromises => {
        console.info('close promise');
        resolve(true);
      }), reason => {
        reject(reason);
      }
    });

    return promise;
  }

  getPosts(): Array<any> {
    return this.posts;
  } 

  getCategories(): Array<any> {
    return this.categories;
  } 

  getArchives(): Array<any> {
    return this.archives;
  } 

}

