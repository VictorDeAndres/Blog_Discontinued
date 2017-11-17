import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class PostCommentsService {

  constructor(
    private http: HttpClient
  ) { }

  getComments(__idPost) {
    const promise = new Promise((resolve, reject) => {
      this.http.get(`${environment.hostDatabase}/api/comments/${__idPost}`)
      .subscribe(responseDataObject => {
        resolve({
          status: true,
          data: responseDataObject
        });
      }, error => {
        reject({
          status: false,
          data: error
        });
      });
    });

    return promise;
  }
}
