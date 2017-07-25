import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { RouterModule }   from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PostsService } from './services/posts.service';

import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostNavComponent } from './post-nav/post-nav.component';
import { PostsComponent } from './posts/posts.component';
import { IntroComponent } from './intro/intro.component';

import { ToArrayPipe } from './pipes/to-array-key.pipe';
import { ToArrayValuePipe } from './pipes/to-array-value.pipe';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PostsComponent,    
    PostListComponent,
    PostCardComponent,
    PostNavComponent,
    ToArrayPipe,
    ToArrayValuePipe,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    routing
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }



