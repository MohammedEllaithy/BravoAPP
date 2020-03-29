import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { postModel} from './../models/postModel';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient,private router:Router) { }

  // getAllPosts(){
  //   return this.http.get<postModel[]>(environment.apiBaseUrl+'posts');
  // }

  getAllPosts(){
    return this.http.get<postModel[]>(environment.apiBaseUrl+'posts')
   
  }

  getSinglePost(id){
    return this.http.get<postModel>(environment.apiBaseUrl+'posts/'+id)
  }
}
