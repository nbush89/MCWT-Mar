import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string = "#ff0000"
  diameter: string = "30";
  isCircle: boolean = false;
  classList = {
    circle:false
  }
  styles ={
    height: "30px",
    width: "30px",
    "background-color": "#ff0000"
  }
  update(){
    this.classList.circle = this.isCircle;
    this.styles.height = this.diameter + 'px';
    this.styles.width = this.diameter + 'px';
    this.styles["background-color"] = this.color;
  }
}
