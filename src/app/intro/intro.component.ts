import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss',
    './intro.component__hamburger.scss'
  ],
  providers: []

})
export class IntroComponent implements OnInit {

  showLoading: Boolean = undefined;

  constructor(
    private postsService: PostsService,
    meta: Meta, title: Title,
  ) {
    title.setTitle('Victor de Andres');
    meta.addTags([
      { name: 'author',   content: 'Victor de Andres'},
      { name: 'keywords', content: 'victor de andres blog team lead front end developer'},
      { name: 'robots', content: 'Index, Follow' }
    ]);
  }

  ngOnInit() {
    const scriptLdJson = document.createElement('script');
    scriptLdJson.text = `{
      "@context": "http://schema.org",
      "@type": "Person",
      "name": "Victor de Andres",
      "url": "https://victordeandres.es",
      "jobTitle": "Full Stack Developer | Software Engineer",
      "gender": "male",
      "image": "https://victordeandres.es/assets/images/LogoFondoBlanco.png",
      "sameAs": [
          "http://es.linkedin.com/in/vdeandres",
          "https://github.com/VictorDeAndres",
          "https://twitter.com/victor_deandres"
      ]
    }
    `;
    scriptLdJson.type = 'application/ld+json';
    document.getElementsByTagName('head')[0].appendChild(scriptLdJson);
    this.postsService.getPosts(0)
      .then(responsePromise => {
        this.showLoading = true;
      },
        () => { console.error('Error carga'); }
      );
  }

  showAnimation() {
    return this.showLoading;
  }

}
