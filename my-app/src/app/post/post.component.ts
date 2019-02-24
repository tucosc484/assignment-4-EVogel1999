import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post;
  comments;

  constructor(private service: ServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id;
    this.route.params.subscribe(val => {
      if (val) {
        id = val.id;
      }
    });

    this.service.getPost(id)
      .subscribe(result => {
        if (result) {
          this.post = result;
        }
      });

    this.service.getComments(id)
      .subscribe(result => {
        if (result) {
          this.comments = result;
        }
      });
  }

}
