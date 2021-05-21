import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-counter',
  templateUrl: './people-counter.component.html',
  styleUrls: ['./people-counter.component.css']
})
export class PeopleCounterComponent implements OnInit {

  constructor(public people: PeopleService) { }

  ngOnInit(): void {
  }

}
