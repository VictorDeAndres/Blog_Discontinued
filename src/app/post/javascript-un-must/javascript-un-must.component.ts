import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-javascript-un-must',
  templateUrl: './javascript-un-must.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class JavascriptUnMustComponent implements OnInit {

  titlepost = 'Javascritp un "MUST"';
  publishDate = '23 de Septiembre 2017';
  postCategories: string[] = ['Javascript'];

  postComments: object[] = [];

  constructor(
    meta: Meta, title: Title,
  ) {
    title.setTitle('Javascript un "must"');

    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'javascript JS'},
      { name: 'description', content: 'Web Developer: Javascript un must que todo desarrollodor web debe dominar' },
      { name: 'robots', content: 'Index, NoFollow' }
    ]);
  }

  ngOnInit() { }

}
