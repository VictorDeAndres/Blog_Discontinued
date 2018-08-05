import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as hljs from 'highlight.js';

@Component({
  selector: 'app-top-angular-router-navigation',
  templateUrl: './top-angular-router-navigation.component.html',
  styleUrls: ['./../post.common.component.scss']
})
export class TopAngularRouterNavigationComponent implements OnInit, AfterViewInit {

  titlepost = 'Posiciona vista al inicio nueva pagina Angular';
  publishDate = '26 de Agosto 2017';
  url = 'top-angular-router-navigation';
  postCategories: string[] = ['Angular', 'Tips'];

  constructor(
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Posiciona vista al inicio nueva pagina Angular');

    meta.addTags([
      { name: 'keywords', content: 'angular tips webapp posicion pagina spa'},
      { name: 'description', content: 'Angular tip para situar la pagina al inico de pantalla cuando se cambia de ruta' },
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Webpack en tus proyectos Angular",
      "alternativeHeadline": "Posiciona el cursor al inicio de la pagina cuando se carga una nueva ruta en Angular",
      "image": "https://victordeandres.es/assets/images/posts/angulartips.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "angular tips webapp posicion inicio pagina spa",
      "wordcount": "513",
      "url": "https://victordeandres.es/post/top-angular-router-navigation",
      "datePublished": "2017-08-26",
      "dateCreated": "2017-08-26",
      "dateModified": "2017-08-26",
      "description": "Angular tip para situar la pagina al inico de pantalla cuando se cambia de ruta",
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

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }

}


