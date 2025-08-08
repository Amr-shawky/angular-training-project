import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Child } from "../../child/child";
@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule, Child],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
faCoffee = faCoffee;
name: string = 'amr';
age: number = 20;
imgpath:string="gojosatoro.jpeg";
bool:boolean=false;
myinfo(): number {
  // Provide your logic here, for example:
  return this.age;
}
print(): void {
  // Implement your print logic here
  this.age++;
  console.log(`Counter value is: ${this.age}`);
}
}
