import { Component } from '@angular/core';
import { ChildInputOutput } from "../child-input-output/child-input-output";
@Component({
  selector: 'app-input-output-demo-component',
  imports: [ChildInputOutput],
  templateUrl: './input-output-demo-component.html',
  styleUrl: './input-output-demo-component.css'
})
export class InputOutputDemoComponent {
  num1:number = 10;
  num2:number = 20;
}
