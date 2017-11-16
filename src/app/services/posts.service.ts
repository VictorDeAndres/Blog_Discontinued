import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

import * as _ from 'lodash';

@Injectable()
export class PostsService {


  stringTest = '';
  posts: Object[] = [];
  categories: Object[] = [];
  archives: Object[] = [];
  currentPage = 0;
  PAGEPERLIST = 5;
  TOTALNUMBERPAGE: number;
  results: any;


  constructor(
    private http: HttpClient
  ) { }

  loadPost() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.hostDatabase}/api/documents/posts`)
      .subscribe(responseDataObject => {
        Object.keys(responseDataObject).map(idx => {
          this.posts.push(responseDataObject[idx]);
        });
        resolve(this.posts.length > 0 ? true : false);
      }, error => {
        console.error('Error', error);
      });
    });

    return promise;
  }

  loadCategories() {
    const promise = new Promise((resolve, reject) => {

      this.http.get(`${environment.hostDatabase}/api/documents/categories`)
      .subscribe(responseDataObject => {
        Object.keys(responseDataObject).map(idx => {
          this.categories.push(idx);
        });
        resolve(this.categories.length > 0 ? true : false);
      }, error => {
        console.error('Error', error);
      });
    });

    return promise;
  }

  loadArchives() {
    const promise = new Promise((resolve, reject) => {
      // this.dbarchives.snapshotChanges().subscribe(action => {
      //   const tempArchives = action.payload.val();
      //   Object.keys(tempArchives).map(objIndex => {
      //     this.archives.push(tempArchives[objIndex]);
      //   })
      //   resolve(this.categories.length > 0 ? true : false);
      // });
      resolve(true);
    });

    return promise;
  }

  loadAlldata() {

    const PROMISELOADPOST = this.loadPost();
    const PROMISELOADCATEGORIES = this.loadCategories();
    const PROMISELOADARCHIVE = this.loadArchives();

    const promise = new Promise((resolve, reject) => {
      Promise.all([
        PROMISELOADPOST,
        PROMISELOADCATEGORIES]
        // PROMISELOADARCHIVE]
      ).then(responsesPromises => {
        this.TOTALNUMBERPAGE = _.chunk(this.posts, this.PAGEPERLIST).length - 1 // Number of pages
        resolve(true);
      }, reason => {
        reject(reason);
      })
    });

    return promise;
  }

  getPosts(getPage: number = 0, filterByCategory: string = null, filterByArchive: string = null) {
    const promise = new Promise((resolve, reject) => {
      // Check if posts exits
      if ( this.posts.length === 0 ) {
        this.loadAlldata()
          .then (
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

  getCurrentPosts(getPage: number = 0, filterByCategory: string = null, filterByArchive: string = null) {
    this.removeFilters();

    // Filter by Category
    if ( filterByCategory ) {
      this.posts.forEach((currentPost, idx) => {
        // Check if categories exits
        if (currentPost['categories']) {
          const resultLookFor = _.pickBy(currentPost['categories'], function(value, key) {
            return _.startsWith(key, filterByCategory);
          });
          if ( Object.keys(resultLookFor).length === 0  ) {
            currentPost['isEnabled'] = false;  // not show
          }
        } else {
          currentPost['isEnabled'] = false;  // not show
        }
        // eof Check if categories exits
      });
    }

    // Filter By Archive
    if ( filterByArchive ) {
      this.posts.forEach((currentPost, idx) => {
        // Check if archived exits
        if (currentPost['archives']) {
          const resultLookFor = _.pickBy(currentPost['archives'], function(value, key) {
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

  getArchives(): object[] {
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
    };
  }

  prevPage(): any {
    if ( --this.currentPage === 0 ) {
      return {
        currentPage: this.currentPage,
        initPage: true
      };
    } else {
      return {
        currentPage: this.currentPage,
        initPage: false
      };
    }
  }

  nextPage(): any {
    if ( ++this.currentPage === this.TOTALNUMBERPAGE ) {
      return {
        currentPage: this.currentPage,
        lastPage: true
      };
    } else {
      return {
        currentPage: this.currentPage,
        lastPage: false
      };
    }
  }

  removeFilters(): void {
    this.posts.forEach((currentPost, idx) => {
      currentPost['isEnabled'] = true;
    });
  }
}

