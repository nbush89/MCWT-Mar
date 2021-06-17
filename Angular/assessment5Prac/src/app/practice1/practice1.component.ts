import { Component, OnInit } from '@angular/core';

interface Name{
  text: string;
  checked: boolean;
}

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
  number1: string ='';
  number2: string='';
  sum:number=0;
  names:Name[] =[
    {text:"name1", checked:false},
    {text:"name2", checked:false},
    {text:"name3", checked:false}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  changeButton(){
    this.buttonClass.dark = !this.buttonClass.dark
    this.buttonClass.light = !this.buttonClass.light
    this.myString += "CLICKED "
  }
  addNumbers(){
    this.sum = parseFloat(this.number1) + parseFloat(this.number2);
  }
  checkName(index: number){
    this.names[index].checked = !this.names[index].checked;
  }
}
