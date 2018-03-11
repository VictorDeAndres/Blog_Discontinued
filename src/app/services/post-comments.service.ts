import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable()
export class PostCommentsService {

  constructor(
    private http: HttpClient,
  ) { }

  getComments(__idPost) {
    const promise = new Promise((resolve, reject) => {

      const HEADERS = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      HEADERS.append('Access-Control-Allow-Origin', '*');
      HEADERS.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

      const PARAMS = {
        v: 1,
        tid: 'UA-111721516-1',
        cid: 555,
        t: 'pageview',
        dp: `/${__idPost}`,
        dh: 'victordeandres.es'
      };

      // this.http.post('https://www.google-analytics.com', PARAMS, { headers: HEADERS })
      //   .subscribe((response) => { });

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
