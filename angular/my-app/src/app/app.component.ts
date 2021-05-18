import { Component } from '@angular/core';


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
  
  people : {firstName:string; lastName:string; color: string}[] = [
    {
    firstName:"Grant",
    lastName: "Chirpus",
    color: "orange"
  },
  {
    firstName: "Luke",
    lastName: "Skywalker",
    color: "blue"
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    color: "red"
  }
]
  onUpdate(){
    //this.showText = !this.showText;
    this.classList.red = this.noun === "red"
  }
}
