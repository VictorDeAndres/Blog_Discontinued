import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  providers: []
})

export class PostListComponent {

  @Input()
    posts: Array<any>
  @Output()
    category: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  selectByCategory(selectCategory: string): void {
    this.category.emit(selectCategory);
  }

}


