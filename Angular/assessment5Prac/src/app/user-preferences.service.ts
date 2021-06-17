import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {
  private name:string ='';
  constructor() { }

  getName(){
    return this.name;
  }
  setName(newName: string){
    this.name = newName;
  }
}
