import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';

import { WebpackEnTusProyectosAngularComponent } from './post/webpack-en-tus-proyectos-angular/webpack-en-tus-proyectos-angular.component';
import { SolidCincoPrincipiosBasicosComponent } from './post/solid-cinco-principios-basicos/solid-cinco-principios-basicos.component';
import { MicroFrontendsComponent } from './post/micro-frontends/micro-frontends.component';
import { ThisJavascriptComponent } from './post/this-javascript/this-javascript.component';



// Route Configuration
export const routes: Routes = [
  {
    path: '', redirectTo: '/index', pathMatch: 'full'
  },
  {
    path: 'index', component: IntroComponent
  },      
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },      
  {
    path: 'post/webpack-en-tus-proyectos-angular', component: WebpackEnTusProyectosAngularComponent
  },
  {
    path: 'post/solid-cinco-principios-basicos', component: SolidCincoPrincipiosBasicosComponent
  },
  {
    path: 'post/micro-frontends', component: MicroFrontendsComponent
  },
  {
    path: 'post/this-javascript', component: ThisJavascriptComponent
  } 
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);