import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {
  counter: number = 0;
  @Input()amount: number =1;
  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.counter = this.counter + this.amount;
  }
  decrease(){
    this.counter = this.counter - this.amount;
  }
}
