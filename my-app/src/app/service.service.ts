import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getComments(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id);
  }
}
