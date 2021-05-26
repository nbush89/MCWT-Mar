import { Component, OnInit } from '@angular/core';
import { BlogService, Blog } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  blog?: Blog;
  constructor(public blogs: BlogService){}
  ngOnInit() {
   this.blogs.getBlog().subscribe((data:Blog)=>{
     this.blog = {...data};
     console.log(data.title)
     console.log(data.language);
     console.log(data.posts.length);
     console.log(data.posts[0].title);
     data.posts.forEach(post=>console.log(post.title));
     for(let post of data.posts){
       console.log(post.title)
       for(let tag of post.tags){
         console.log('--'+tag);
       }
     }
   })
  }
  title = 'api-exercise';
}
