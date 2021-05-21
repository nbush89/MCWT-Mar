import { Component } from '@angular/core';
import { LogService } from './log.service';
import { PeopleService } from './people.service';

export interface Person {
  firstName:string; 
  lastName:string; 
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noun='';
  adverb='';
  showText = true
  birthday = "2021-05-05";
  classList: any ={
    red: this.noun === "red"
  }
  
  
  constructor(private log:LogService, public people: PeopleService){}
  onUpdate(){
    //this.showText = !this.showText;
    this.log.log("I AM A MESSGAE");
    if(this.noun.length < 4){
      this.classList.red = true
    }else if(this.noun.length < 10){
      this.classList.yellow = true
    }else{
      this.classList.green = true
    }
  }
  onPersonUpdate(index: number){
    this.people.removePerson(index);
  }
}
