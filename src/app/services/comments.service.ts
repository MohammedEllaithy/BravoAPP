import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { commentModel } from './../models/commentModel';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient,private router:Router) { }

  getPostComments(postId){
    return this.http.get<commentModel[]>(environment.apiBaseUrl+'posts/'+postId+'/comments')
  }
  addComment(postId, cmt: commentModel) {
    return this.http.post(environment.apiBaseUrl+'posts/'+postId+'/comments', cmt).subscribe();
  }

}
