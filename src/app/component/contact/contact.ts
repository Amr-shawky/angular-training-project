import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  myinfo:{name:string; email:string; age:number; address:string}={
    name: 'John Doe',
    email: 'john.doe@example.com',
    age : 20,
    address: '123 Main St, Anytown, USA'
  }
  name:string="";
}

