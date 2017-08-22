import { Injectable } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import * as _ from "lodash";

@Injectable()
export class PostsService {

  dbposts: FirebaseListObservable<any>;
  dbcategories: FirebaseListObservable<any>;
  dbarchives: FirebaseListObservable<any>;

  stringTest: string = ''
  posts: Object[] = [];
  categories: Object[] = [];
  archives: Object[] = [];
  currentPage: number = 0;
  PAGEPERLIST: number = 5;
  TOTALNUMBERPAGE: number;


  constructor(    
    db: AngularFireDatabase
  ){ 
    console.info('Initializae Init Service');
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

    const PROMISELOADPOST = this.loadPost();
    const PROMISELOADCATEGORIES = this.loadCategories();
    const PROMISELOADARCHIVE = this.loadArchives();

    var promise = new Promise((resolve, reject) => {
      Promise.all([
        PROMISELOADPOST,
        PROMISELOADCATEGORIES,
        PROMISELOADARCHIVE]
      ).then(responsesPromises => {
        this.TOTALNUMBERPAGE = _.chunk(this.posts, this.PAGEPERLIST).length - 1 // Number of pages
        resolve(true);
      }), reason => {
        reject(reason);
      }
    });

    return promise;
  }

  getPosts(getPage: number = 0, filterByCategory: string = null, filterByArchive: string = null) {
    var promise = new Promise((resolve, reject) => {
      // Check if posts exits
      if ( this.posts.length === 0 ){
        this.loadAlldata()
          .then( 
            () => { 
              resolve(this.getCurrentPosts(getPage, filterByCategory, filterByArchive));
            },
            () => {
              console.error('Error');
            }
          );
      } else {
        resolve(this.getCurrentPosts(getPage, filterByCategory, filterByArchive))
      } // eof if ( this.posts = [] ){

    }); // eof promise

    return promise;
  } 

  getCurrentPosts(getPage: number = 0, filterByCategory: string = null, filterByArchive: string = null){
    this.removeFilters();

    // Filter by Category
    if ( filterByCategory ){
      this.posts.forEach((currentPost,idx) => {
        // Check if categories exits
        if (currentPost['categories']) {
          var resultLookFor = _.pickBy(currentPost['categories'], function(value, key) {
            return _.startsWith(key, filterByCategory);
          });
          if ( Object.keys(resultLookFor).length === 0  ){
            currentPost['isEnabled'] = false;  // not show
          }
        } else {
          currentPost['isEnabled'] = false;  // not show
        }
        // eof Check if categories exits
      });
    }

    // Filter By Archive
    if ( filterByArchive ){
      this.posts.forEach((currentPost,idx) => {
        // Check if archived exits
        if (currentPost['archives']) {
          var resultLookFor = _.pickBy(currentPost['archives'], function(value, key) {
            return _.startsWith(key, filterByArchive);
          });
          if ( Object.keys(resultLookFor).length === 0  ){
            currentPost['isEnabled'] = false;  // not show
          }
        } else {
          currentPost['isEnabled'] = false;  // not show
        }
        // eof Check if archived exits
      });
    }

    // Apply filters
    const displayPost = _.reverse(_.filter(this.posts, 'isEnabled'));

    // Recalculate pages
    this.TOTALNUMBERPAGE = _.chunk(displayPost, this.PAGEPERLIST).length - 1 // Number of pages

    // Split Post to display
    return (this.posts === [] ? [] : _.chunk(displayPost, this.PAGEPERLIST)[getPage]);
  }

  getCategories(): object[] {
    return this.categories;
  } 

  getArchives(): object[]{
    return this.archives;
  } 

  getCurrentPage(): number {
    return this.currentPage;
  }

  initializeDisplayPage(): any {
    this.currentPage = 0;
    return {
      initPage: true,
      lastPage: this.TOTALNUMBERPAGE > 0 ? false : true
    }
  }

  prevPage(): any {
    if ( --this.currentPage === 0 ) {
      return {
        currentPage: this.currentPage,
        initPage: true
      }
    } else {
      return {
        currentPage: this.currentPage,
        initPage: false
      }
    }
  }

  nextPage(): any {
    if ( ++this.currentPage === this.TOTALNUMBERPAGE ) {
      return {
        currentPage: this.currentPage,
        lastPage: true
      }
    } else {
      return {
        currentPage: this.currentPage,
        lastPage: false
      }
    }
  }

  removeFilters(): void{
    this.posts.forEach((currentPost,idx) => {
      currentPost['isEnabled'] = true;
    });
  }
}

