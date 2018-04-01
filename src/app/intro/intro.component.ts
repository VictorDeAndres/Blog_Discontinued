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
    title.setTitle('Victor de Andres');
    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'victor de andres blog team lead front end developer'},
      { name: 'robots', content: 'Index, Follow' }
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
