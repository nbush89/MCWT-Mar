import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  buttonClass={
    "dark": false,
    "light": true
  }
  myString:string = "";
  constructor() { }

  ngOnInit(): void {
  }
  changeButton(){
    this.buttonClass.dark = !this.buttonClass.dark
    this.buttonClass.light = !this.buttonClass.light
    this.myString += "CLICKED "
  }
}
