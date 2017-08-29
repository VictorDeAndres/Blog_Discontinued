import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { RouterModule }   from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PostsService } from './services/posts.service';
import { PostCommentsService } from './services/post-comments.service';

import { IntroComponent } from './intro/intro.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostNavComponent } from './post-nav/post-nav.component';
import { PostFooterComponent } from './post-footer/post-footer.component';
import { ContactComponent } from './contact/contact.component';

import { ToArrayPipe } from './pipes/to-array-key.pipe';
import { ToArrayValuePipe } from './pipes/to-array-value.pipe';

import { Routing } from './app.routes';
import { WebpackEnTusProyectosAngularComponent } from './post/webpack-en-tus-proyectos-angular/webpack-en-tus-proyectos-angular.component';
import { SolidCincoPrincipiosBasicosComponent } from './post/solid-cinco-principios-basicos/solid-cinco-principios-basicos.component';
import { MicroFrontendsComponent } from './post/micro-frontends/micro-frontends.component';
import { ThisJavascriptComponent } from './post/this-javascript/this-javascript.component';
import { PostCommentComponent } from './post-comment/post-comment.component';



@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PostsComponent,    
    PostListComponent,
    PostNavComponent,
    PostFooterComponent,
    ToArrayPipe,
    ToArrayValuePipe,
    WebpackEnTusProyectosAngularComponent,
    SolidCincoPrincipiosBasicosComponent,
    MicroFrontendsComponent,
    ThisJavascriptComponent,
    ContactComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }



