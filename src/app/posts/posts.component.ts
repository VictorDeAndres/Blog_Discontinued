import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'post-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  constructor() { 
    console.info('Constructor')
  }

  ngOnInit() {
    document.body.style.background = "url('./assets/images/struckaxiom.png')";
  }

}
