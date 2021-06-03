import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface RedditResponse{
  data:{
    children: Post[]
  }
}

export interface Post{
  data:{
    thumbnail: string;
    title: string;
    permalink: string;
    doesntExist: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  url = 'https://www.reddit.com/r/aww/.json';
  constructor(public client: HttpClient) { }
  getPosts(){
    return this.client.get<RedditResponse>(this.url);
  }
}
