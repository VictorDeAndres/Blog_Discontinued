import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'post-publish-info',
  templateUrl: './post-publish-info.component.html',
  styleUrls: ['./post-publish-info.component.scss']
})
export class PostPublishInfoComponent implements OnInit {

  @Input() 
    publishDate : string;
  @Input()
    postCategories: object;
    
  constructor() { }

  ngOnInit() {
  }

}
