import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { IntroComponent } from './intro/intro.component';

// Route Configuration
export const routes: Routes = [
  {
    path: 'index', component: IntroComponent
  },      
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: '', redirectTo: '/index', pathMatch: 'full'
  }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);