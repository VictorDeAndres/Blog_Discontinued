import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
// import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import 'rxjs/add/operator/toPromise';

import { Commentform } from './../classes/commentform';
import { PostCommentsService } from './../services/post-comments.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss'],
  // animations: [
  //   trigger('showCommentBox', [
  //     state('inactive', style({
  //       display: 'none',
  //       height: '0'
  //     })),
  //     state('active',   style({
  //       display: 'block',
  //       height: 'auto'
  //     })),
  //     transition('inactive => active', animate('100ms ease-in')),
  //     transition('active => inactive', animate('100ms ease-out'))
  //   ])
  // ]
  providers: [ PostCommentsService ]
})

export class PostCommentComponent implements OnInit {

  @Input()
    idpost: string;

  showComment: Boolean = false;
  postComments: Object[] = [];

  comment = new Commentform('', '');

  constructor(
    private http: Http,
    private postCommentsService: PostCommentsService
  ) { }

  ngOnInit() {
    this.loadComments();
  }

  loadComments(): void {
    this.postCommentsService.getComments(this.idpost)
      .then(responsePromise => {
        if ( responsePromise['status'] ) {
          this.postComments = [];
          if (responsePromise['data'] !== null ) {
            Object.keys(responsePromise['data']).map(idx => {
              this.postComments.push(responsePromise['data'][idx]);
            });
          }
        }
      },
        () => { console.error('Error carga'); }
      );
  }

  onSubmit(): void {
    const newComment = {
      idpost: this.idpost,
      name: this.comment.name,
      comment: this.comment.message
    };

    const url = `${environment.hostDatabase}/api/comments/${this.idpost}`;

    if ( newComment.name && newComment.comment) {
      this.http
        .post(url, newComment)
          .subscribe(data => {
            // Initialize data.
            this.comment = new Commentform('', '');
            // this.showComment = ( this.showComment === 'active' ? 'inactive' : 'active');
            this.showComment = !this.showComment;
            // eof Initialize data.
            this.loadComments();
          }, error => {
            console.error(`${error.status} - ${error.statusText}`);
          });
    }
  }

  enabledComment(): void {
    this.showComment = !this.showComment;
  }
}
