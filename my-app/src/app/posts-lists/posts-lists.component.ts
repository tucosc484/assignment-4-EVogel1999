import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
//import { MatLoadingSpinner } from '@angular/material';

@Component({
  selector: 'app-posts-lists',
  templateUrl: './posts-lists.component.html',
  styleUrls: ['./posts-lists.component.scss']
})
export class PostsListsComponent implements OnInit {

  posts;

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.service.getPosts()
    .subscribe(val => {
      if (val) {
        this.posts = val;
      }
    });
  }

}
