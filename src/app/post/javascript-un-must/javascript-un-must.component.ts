import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-javascript-un-must',
  templateUrl: './javascript-un-must.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class JavascriptUnMustComponent implements OnInit {

  titlepost = 'Javascritp un "MUST"';
  publishDate = '23 de Septiembre 2017';
  url = 'javascript-un-must-debes-dominar';
  postCategories: string[] = ['Javascript'];

  constructor(
    meta: Meta, title: Title,
  ) {
    title.setTitle('Javascript un "must"');

    meta.addTags([
      { name: 'keywords', content: 'javascript JS'},
      { name: 'description', content: 'Web Developer: Javascript un must que todo desarrollodor web debe dominar' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Javascritp un MUST",
      "alternativeHeadline": "Razones por las que Javascript es un "must" que debes dominar",
      "image": "https://victordeandres.es/assets/images/posts/javascript_ninja.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "javascript JS",
      "wordcount": "915",
      "url": "https://victordeandres.es/post/javascript-un-must-debes-dominar",
      "datePublished": "2017-09-23",
      "dateCreated": "2017-09-23",
      "dateModified": "2017-09-233",
      "description": "Web Developer: Javascript un must que todo desarrollodor web debe dominar",
      "author": {
        "@type": "Person",
        "name": "Victor de Andres"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Victor de Andres",
        "logo": {
        "@type": "imageObject",
        "url": "https://victordeandres.es/assets/images/LogoFondoBlanco.png"
        }
      },
      "mainEntityOfPage": "https://victordeandres.es/post"
      }
    `;
    scriptLdJson.type = 'application/ld+json';
    document.getElementsByTagName('head')[0].appendChild(scriptLdJson);
  }

}
