import { Component, OnInit } from '@angular/core';
import {RedditResponse, Post, RedditService} from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts:Post[] = [];
  constructor(public reddit: RedditService){}
  ngOnInit(){
    this.reddit.getPosts().subscribe(response=>{
      this.posts = response.data.children;
      console.log(this.posts);
    })
  }
}
