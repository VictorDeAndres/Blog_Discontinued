import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Contactform }    from './../classes/contactform';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  contact = new Contactform('', '', '');

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  onSubmit():void { 
    const url = `http://localhost:8080/blogcontact`;

    this.http
      .post(url, this.contact)
        .subscribe(data => {
          console.info(`${data.status}` );
        }, error => {
          console.error(`${error.status} - ${error.statusText}`);
        });
  }

}
