import { Component, OnInit } from '@angular/core';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'post-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  providers: []
})

export class PostsComponent implements OnInit {

  selectArchive: string = undefined;
  selectCategory: string = undefined;  
  posts : Object = {};
  categories: Object[] = [];
  archives: Object[] = [];
  showPage: number = 0;
  initPage: boolean;
  lastPage: boolean;

  constructor(
    private postsService: PostsService,
  ) { }

  ngOnInit() {
    // Load background
    // document.body.style.background = "url('./assets/images/struckaxiom.png')";

    this.postsService.getPosts(0)
      .then(responsePromise => {
        this.loadAuxData();
        this.posts = responsePromise;
      },
        () => { console.error('Error carga'); }
      );
  }

  loadAuxData():void {
    const INITPAGE = this.postsService.initializeDisplayPage();
    this.initPage = INITPAGE.initPage;
    this.lastPage = INITPAGE.lastPage;
    this.categories = this.postsService.getCategories();
    this.archives = this.postsService.getArchives();            
  }

  movebackward = () => {  
    const CURRPAGE = this.postsService.prevPage();
    this.postsService.getPosts(CURRPAGE.currentPage, this.selectCategory, this.selectArchive)
      .then(responsePromise => {
        this.initPage = CURRPAGE.initPage;
        this.lastPage = false;        
        this.posts = responsePromise;
      },
        () => { console.error('Error carga'); }
      );
  }

  moveforward = () => { 
    const CURRPAGE = this.postsService.nextPage();
    this.postsService.getPosts(CURRPAGE.currentPage, this.selectCategory, this.selectArchive)
      .then(responsePromise => {
        this.initPage = false;
        this.lastPage = CURRPAGE.lastPage;
        this.posts = responsePromise;
      },
        () => { console.error('Error carga'); }
      );

  }

  selectByCategory(event = this.selectCategory) {
    if (event !== undefined){
      this.selectCategory = event;      
      this.selectArchive = null
    }
    this.postsService.getPosts(0, this.selectCategory, this.selectArchive)
      .then(responsePromise => {
        const INITPAGE = this.postsService.initializeDisplayPage();
        this.initPage = INITPAGE.initPage;
        this.lastPage = INITPAGE.lastPage;
        this.posts = responsePromise;
      },
        () => { console.error('Error carga'); }
      );
  }

  selectByArchive(event = this.selectArchive) {
    if (event !== undefined){
      this.selectArchive = event;      
      this.selectCategory = null
    }
    this.postsService.getPosts(0, this.selectCategory, this.selectArchive)
      .then(responsePromise => {
        const INITPAGE = this.postsService.initializeDisplayPage();
        this.initPage = INITPAGE.initPage;
        this.lastPage = INITPAGE.lastPage;
        this.posts = responsePromise;
      },
        () => { console.error('Error carga'); }
      );
  }

}
