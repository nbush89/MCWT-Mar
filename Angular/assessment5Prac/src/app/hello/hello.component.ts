import { Component, OnInit } from '@angular/core';
import {UserPreferencesService} from '../user-preferences.service';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name:string='';
  serviceName: string =''
  constructor(public preferences: UserPreferencesService) { }

  ngOnInit(): void {
    this.serviceName = this.preferences.getName();
  }
  updateName(){
    console.log(this.name)
    this.preferences.setName(this.name);

    this.serviceName = this.preferences.getName();
    console.log(this.serviceName);
  }
}
