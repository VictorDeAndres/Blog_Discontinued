import { Component, OnInit } from '@angular/core';

import { Contactform }    from './../classes/contactform';

@Component({
  selector: 'blog-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  contact = new Contactform('', '', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit():void { 
    console.info('sendContactForm', this.contact); 
  }

}
