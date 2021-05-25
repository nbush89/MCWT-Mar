import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Person} from './app.component'
export interface PersonResponse{
  complete: Person[];
}
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  apiUrl = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  constructor(public client: HttpClient) { }

  getPeople(){
    return this.client.get(this.apiUrl);
  }

  count():number{
    return 0;
  }
}
