import { Component, OnInit } from '@angular/core';
import { PeopleService, PersonResponse } from './people.service';

export interface Person {
  firstName:string; 
  lastName:string; 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  noun='';
  adverb='';
  showText = true
  birthday = "2021-05-05";
  classList: any ={
    red: this.noun === "red"
  }
  people: Person[] = [];
  constructor(public peopleApi: PeopleService){}
  onUpdate(){
    if(this.noun.length < 4){
      this.classList.red = true
    }else if(this.noun.length < 10){
      this.classList.yellow = true
    }else{
      this.classList.green = true
    }
  }
  ngOnInit(){
    this.peopleApi.getPeople().subscribe((people:any )=>{
      this.people = people.complete;
    })
  }
  addTask(){
      const newTask = {firstName: this.noun, lastName: "false"};
      this.people.push(newTask);
  }
}
