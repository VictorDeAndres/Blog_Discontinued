import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contactform } from './../classes/contactform';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  contact = new Contactform('', '', '');

  constructor(
    private http: Http,
    private router: Router
  ) { }

  onSubmit(): void {
    const url = `${environment.hostDatabase}/blogcontact`;

    this.http
      .post(url, this.contact)
        .subscribe(data => {
          this.router.navigateByUrl('/posts');
        }, error => {
          console.error(`${error.status} - ${error.statusText}`);
        });
  }

}
