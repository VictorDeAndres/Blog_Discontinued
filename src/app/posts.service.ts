import { Injectable } from '@angular/core';

import { Posts } from './posts';
import { POSTS } from './data/mock-posts';

@Injectable()
export class PostsService {

  constructor() { 
  }

  getPosts(): Posts[] {
    return POSTS;
  } 
}

