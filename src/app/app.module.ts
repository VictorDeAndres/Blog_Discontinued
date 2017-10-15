import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import { Routing } from './app.routes';

import { PostsService } from './services/posts.service';
import { ToArrayPipe } from './pipes/to-array-key.pipe';
import { ToArrayValuePipe } from './pipes/to-array-value.pipe';

import { IntroComponent } from './intro/intro.component';

import { ContactComponent } from './contact/contact.component';

// [START] Posts Component View
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostNavComponent } from './post-nav/post-nav.component';
// [END] Posts Component View

// [START] Post
import { WebpackEnTusProyectosAngularComponent } from './post/webpack-en-tus-proyectos-angular/webpack-en-tus-proyectos-angular.component';
import { MicroFrontendsComponent } from './post/micro-frontends/micro-frontends.component';
import { HostingExpressJsFirebaseComponent } from './post/hosting-expressjs-firebase/hosting-expressjs-firebase.component';
import { TopAngularRouterNavigationComponent } from './post/top-angular-router-navigation/top-angular-router-navigation.component';
import { IntroduccionGraphqlComponent } from './post/introduccion-graphql/introduccion-graphql.component';
// [END] Post

// [START] Post Component View
import { PostPublishInfoComponent } from './post-publish-info/post-publish-info.component';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
// [END] Post Component View

@NgModule({
  declarations: [
    AppComponent,

    ToArrayPipe,
    ToArrayValuePipe,

    IntroComponent,
    ContactComponent,

    PostsComponent,
    PostListComponent,
    PostNavComponent,

    WebpackEnTusProyectosAngularComponent,
    MicroFrontendsComponent,
    HostingExpressJsFirebaseComponent,
    TopAngularRouterNavigationComponent,
    IntroduccionGraphqlComponent,

    PostPublishInfoComponent,
    PostFooterComponent,
    PostCommentComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'universal-victordeandres'
    }),
    FormsModule,
    HttpModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
