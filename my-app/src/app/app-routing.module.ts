import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListsComponent } from './posts-lists/posts-lists.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts', component: PostsListsComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
