import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss',
    './intro.component__hamburger.scss'
  ],
  providers: []

})
export class IntroComponent implements OnInit {

  showLoading: Boolean = undefined;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.postsService.testMongoDB();
    this.postsService.getPosts(0)
      .then(responsePromise => {
        this.showLoading = true;
      },
        () => { console.error('Error carga'); }
      );
  }

  showAnimation() {
    return this.showLoading
  }

}
