import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-child-input-output',
  imports: [],
  templateUrl: './child-input-output.html',
  styleUrl: './child-input-output.css'
})
export class ChildInputOutput {  
  @Input() sharedData: string = '';
  @Input() num!: number;
  printSharedData() {
    console.log(this.sharedData);
  }
  printNum() {
    console.log(this.num);
  }
}
