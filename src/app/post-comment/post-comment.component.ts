import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import 'rxjs/add/operator/toPromise';

import { Commentform }    from './../classes/commentform';

@Component({
  selector: 'post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
  animations: [
    trigger('showCommentBox', [
      state('inactive', style({
        display: 'none',
        height: '0'
      })),
      state('active',   style({
        display: 'block',
        height: 'auto'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})

export class PostCommentComponent implements OnInit {

  @Input() 
    idpost : string;

  @Input() 
    postComments : object[];

  showComment: string = 'inactive';
  postcomments:object[] = [];

  comment = new Commentform('', '');

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  onSubmit(idPost):void { 
    
    const newComment = {
      idpost: this.idpost,
      name: this.comment.name,
      comment: this.comment.message
    };

    const url = `http://localhost:8080/addcomment`;

    if ( newComment.name && newComment.comment){
      this.http
        .post(url, newComment)
          .subscribe(data => {
            // Initialize data.
            this.comment = new Commentform('', '');
            this.showComment = ( this.showComment === 'active' ? 'inactive' : 'active');
            // eof Initialize data.
          }, error => {
            console.error(`${error.status} - ${error.statusText}`);
          });
    } 
  }

  enabledComment(): void {
    this.showComment = ( this.showComment === 'active' ? 'inactive' : 'active');
  }
}
