import { Component, OnInit } from '@angular/core';
//import { MatLoadingSpinner } from '@angular/material';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss']
})
export class PostsListsComponent implements OnInit {

  posts: {
    userId: number;
    id: number;
    title: string;
    body: string;
  }[];

  constructor() { }

  ngOnInit() {
  }

}
