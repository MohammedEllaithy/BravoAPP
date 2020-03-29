import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {PostsService} from './../../services/posts.service';
import { postModel} from './../../models/postModel';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postData:postModel[]=[];


  constructor(private postsService: PostsService,
    private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
   
    this.getAllposts();
  }
  
  getAllposts() {
    this.postsService.getAllPosts().subscribe(
      data => this.postData = data
    );
    }
  }
