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

export const firebaseConfig = {
  apiKey: "AIzaSyDoSESpawwUQXaqHZkvcMLDmQHjke9Q36Q",
  authDomain: "fir-crud-93710.firebaseapp.com",
  databaseURL: "https://blog-d845e.firebaseio.com",
  storageBucket: "fir-crud-93710.appspot.com",
  messagingSenderId: "720204736178"
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {
        path: 'index', component: IntroComponent
      },      
      {
        path: 'posts', component: PostsComponent
      },
      {
        path: '', redirectTo: '/index', pathMatch: 'full'
      }      
    ])    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }



