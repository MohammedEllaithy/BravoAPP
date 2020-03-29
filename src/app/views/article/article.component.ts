import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {PostsService} from './../../services/posts.service';
import { postModel} from './../../models/postModel';
import {CommentsService} from './../../services/comments.service';
import { commentModel} from './../../models/commentModel';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  postData:postModel;
  cmtData:commentModel[]=[];
  model={
    name:'',
    email:'',
    body:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor( private cmtService: CommentsService,private postsService: PostsService,private route: ActivatedRoute
    ,private router: Router,) { }

  ngOnInit(): void {
  this.getPostData();
  this.getpostcmts();

  }

  getpostcmts() {
    const id: string = this.route.snapshot.params.id;
  
    this.cmtService.getPostComments(id).subscribe(
      data =>(this.cmtData= data)
    );
    }

  getPostData(): void{
    const id: string = this.route.snapshot.params.id;
  
    this.postsService.getSinglePost(id).subscribe(
      data =>(this.postData = data)
    );
  }

  onSubmit(form:NgForm){
    const postID: string = this.route.snapshot.params.id;

    this.cmtService.addComment(postID,form.value);
    form.resetForm();
  }


}
