import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [ PostsService ]
})

export class PostListComponent implements OnInit {

  // posts: Posts[];
  posts : Array<any> = [];

  constructor(
    private postsService: PostsService,
  ) {}

  ngOnInit() {
    this.postsService.loadPost();
  }

}


