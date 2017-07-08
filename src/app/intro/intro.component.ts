import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  providers: [ PostsService ]

})
export class IntroComponent implements OnInit {

  showLoading: Boolean = undefined;

  constructor(
    private postsService: PostsService
  ) { 
  }

  ngOnInit() {

    if (( this.postsService.getPosts().length === 0 ) || 
      ( this.postsService.getCategories().length === 0 ) ||       
      ( this.postsService.getArchives().length === 0 ) 
      ){

        this.postsService.loadAlldata().then(
          () => { this.showLoading = true; },
          () => console.log("Task Errored!")
        );
    }
  }

  showAnimation() {
    return this.showLoading
  }

}
