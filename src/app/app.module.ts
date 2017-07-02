import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { PostListComponent } from './post-list/post-list.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostNavComponent } from './post-nav/post-nav.component';

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
    PostListComponent,
    PostCardComponent,
    PostNavComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 