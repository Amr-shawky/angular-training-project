import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css'
})
export class Test {

  testfunc(){
    console.log("hello iam a function in Test component");
  }
}
