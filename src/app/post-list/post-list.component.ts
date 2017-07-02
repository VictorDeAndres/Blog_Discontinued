import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { PostsService } from '../posts.service';
import { Posts } from '../posts';


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [ PostsService ]
})

export class PostListComponent implements OnInit {

  // posts: Posts[];
  posts : Array<any> = [];
  item: FirebaseListObservable<any>;

  constructor(
    private postsService: PostsService,
    db: AngularFireDatabase
  ) {}

  ngOnInit() {
    this.postsService.loadPost();
    this.posts = this.postsService.getPosts();
    console.info('OnInit', this.posts );

  }

}


