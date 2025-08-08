import { Component } from '@angular/core';
import { Child } from "../../child/child";

@Component({
  selector: 'app-potfolio',
  imports: [Child],
  templateUrl: './potfolio.html',
  styleUrl: './potfolio.css'
})
export class Potfolio {

  names:string[]=[

  ]
contactsinfo: { id: number; myname: string; age: number }[] = [
  { id: 1, myname: 'amr', age: 21 },
  { id: 2, myname: 'sara', age: 25 },
  { id: 3, myname: 'mohamed', age: 30 },
  { id: 4, myname: 'laila', age: 28 },
  { id: 5, myname: 'ahmed', age: 22 },
  { id: 6, myname: 'fatma', age: 27 },
  { id: 7, myname: 'youssef', age: 24 },
  { id: 8, myname: 'dina', age: 26 },
  { id: 9, myname: 'omar', age: 29 },
  { id: 10, myname: 'salma', age: 23 }
];
}
