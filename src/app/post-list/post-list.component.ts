import { Component, OnInit } from '@angular/core';


import { PostsService } from '../posts.service';
import { Posts } from '../posts';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: [PostsService]
})

export class PostListComponent implements OnInit {

  items: FirebaseListObservable<any[]>;
  posts: Posts[];

  constructor(private postsService: PostsService, db: AngularFireDatabase) { 
    this.items = db.list('/Posts');
    console.info(this.items);
  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    console.info(this.posts);
  }

}


