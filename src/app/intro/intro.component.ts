import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

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
    private postsService: PostsService,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Blog Victor de Andres');
    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'}
    ]);
  }

  ngOnInit() {
    this.postsService.getPosts(0)
      .then(responsePromise => {
        this.showLoading = true;
      },
        () => { console.error('Error carga'); }
      );
  }

  showAnimation() {
    return this.showLoading;
  }

}
