import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Person} from '../app.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input()singlePerson?: Person;
  @Output()changed = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  update(): void{
    this.changed.emit();
  }
}
