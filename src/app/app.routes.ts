import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';

import { WebpackEnTusProyectosAngularComponent } from './post/webpack-en-tus-proyectos-angular/webpack-en-tus-proyectos-angular.component';
import { MicroFrontendsComponent } from './post/micro-frontends/micro-frontends.component';
import { HostingExpressJsFirebaseComponent } from './post/hosting-expressjs-firebase/hosting-expressjs-firebase.component';
import { TopAngularRouterNavigationComponent } from './post/top-angular-router-navigation/top-angular-router-navigation.component';
import { IntroduccionGraphqlComponent } from './post/introduccion-graphql/introduccion-graphql.component';
import { JavascriptUnMustComponent } from './post/javascript-un-must/javascript-un-must.component';
import { CleanCodeNormasComponent } from './post/clean-code-normas/clean-code-normas.component';
import { ImportanciaTestUnitariosComponent } from './post/importancia-test-unitarios/importancia-test-unitarios.component';
import { JavascriptScopeComponent } from './post/javascript-scope/javascript-scope.component';
import { JavascriptHoistingComponent } from './post/javascript-hoisting/javascript-hoisting.component';
import { GitDesdeLineaComandosComponent } from './post/git-desde-linea-comandos/git-desde-linea-comandos.component';

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
    path: 'post/micro-frontends', component: MicroFrontendsComponent
  },
  {
    path: 'post/hosting-expressjs-firebase', component: HostingExpressJsFirebaseComponent
  },
  {
    path: 'post/top-angular-router-navigation', component: TopAngularRouterNavigationComponent
  },
  {
    path: 'post/introduccion-graphql', component: IntroduccionGraphqlComponent
  },
  {
    path: 'post/javascript-un-must-debes-dominar', component: JavascriptUnMustComponent
  },
  {
    path: 'post/clean-code-normas', component: CleanCodeNormasComponent
  },
  {
    path: 'post/importancia-test-unitarios', component: ImportanciaTestUnitariosComponent
  },
  {
    path: 'post/javascript-scope', component: JavascriptScopeComponent
  },
  {
    path: 'post/javascript-hoisting', component: JavascriptHoistingComponent
  },
  {
    path: 'post/git_desde_linea_comandos', component: GitDesdeLineaComandosComponent
  },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
