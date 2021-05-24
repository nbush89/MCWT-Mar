import { Injectable } from '@angular/core';
import {Person} from './app.component'
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people : Person[] = [
    {
    firstName:"Grant",
    lastName: "Chirpus",
    },
    {
      firstName: "Luke",
      lastName: "Skywalker",
    },
    {
      firstName: "Darth",
      lastName: "Vader",
    },
    {
      firstName: "Harry",
      lastName: "Potter"
    }
  ];
  constructor() { }

  getPeople(): Person[]{
    return this.people
  }
  removePerson(index:number){
    this.people.splice(index,1);
  }

  count():number{
    return this.people.length;
  }
}
