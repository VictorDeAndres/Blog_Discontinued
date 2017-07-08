import { Component } from '@angular/core';

import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ PostsService ]
})

export class AppComponent {

  // requestArchives: boolean = false;
  // requestCategories: boolean = false;
  // requestPosts: boolean = false;

  constructor(
    private postsService: PostsService
  ) {
    // Load posts
    // this.postsService.loadPost().then(
    //   (requestPosts) => {
    //     if (requestPosts) {
    //       this.requestPosts = true;
    //     } else {
    //       console.log("Task Errored!")  
    //     }
    //   },
    //   () => console.log("Task Errored!")
    // );

    // Load Categories
    // this.postsService.loadCategories().then(
    //   (requestCategories) => {
    //     if (requestCategories) {
    //       this.requestCategories = true;
    //     } else {
    //       console.log("Task Errored!")  
    //     }
    //   },
    //   () => console.log("Task Errored!")
    // );

    // Load Archives
    // this.postsService.loadArchives().then(
    //   (requestArchives) => {
    //     if (requestArchives) {
    //       this.requestArchives = true;
    //     } else {
    //       console.log("Task Errored!")  
    //     }
    //   },
    //   () => console.log("Task Errored!")
    // );
  }

  // showLoading(){
  //   return this.requestPosts && this.requestCategories && this.requestArchives;
  // }
}
