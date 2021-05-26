import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Blog{
  title:string;
  language: string;
  posts:Post[];
}
interface Post{
  title:string;
  author:string;
  content: string;
  tags: string[];
}
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl = "https://grandcircusco.github.io/demo-apis/blog-posts.json";

  constructor(public client: HttpClient) { }

  getBlog(){
    return this.client.get<Blog>(this.apiUrl);
  }
}
