import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListsComponent } from './posts-lists/posts-lists.component';

const routes: Routes = [
  { path: 'post/:id', component: PostsListsComponent },
  { path: 'posts', component: PostsListsComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
