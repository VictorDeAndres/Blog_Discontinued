import { Component, OnInit, Renderer2, Inject  } from '@angular/core';
import { ElementRef, AfterViewInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import * as hljs from 'highlight.js';

@Component({
  selector: 'app-git-desde-linea-comandos',
  templateUrl: './git-desde-linea-comandos.component.html',
  styleUrls: ['./../post.common.component.scss']
})

export class GitDesdeLineaComandosComponent implements OnInit, AfterViewInit {
  titlepost = 'Git desde la linea de comandos';
  publishDate = '20 de Enero 2018';
  url = 'git_desde_linea_comandos';
  postCategories: string[] = ['Git', 'Fudamentos', 'Desarrollo'];

  constructor(
    // private db: AngularFireDatabase,
    private eltRef: ElementRef,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Git desde la linea de comandos');

    meta.addTags([
      { name: 'keywords', content: 'comandos git push pull branch clone fetch checkout'},
      { name: 'description', content: 'Lista de comandos basicos para utilizar git desde la linea de comandos' },
      { name: 'robots', content: 'Index, Follow' }
    ]);

  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `
      { "@context": "http://schema.org",
      "@type": "BlogPosting",
      "headline": "Git desde la linea de comandos",
      "alternativeHeadline": "Comandos básicos para utilizar GIT desde la línea de comandos",
      "image": "https://victordeandres.es/assets/images/posts/git_linea_comandos.png",
      "editor": "Victor de Andres",
      "genre": "front end software development",
      "keywords": "comandos git push pull branch clone fetch checkout",
      "wordcount": "1691",
      "url": "https://victordeandres.es/post/git_desde_linea_comandos",
      "datePublished": "2018-01-20",
      "dateCreated": "2018-01-20",
      "dateModified": "2018-01-20",
      "description": "Lista de comandos basicos para utilizar git desde la linea de comandos",
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
    document.getElementsByTagName('head')[0].appendChild(scriptLdJson);
  }

  ngAfterViewInit() {
    this.eltRef.nativeElement.querySelectorAll('pre code').forEach(code => hljs.highlightBlock(code) );
  }
}
