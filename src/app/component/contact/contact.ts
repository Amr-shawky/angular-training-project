import { Component, QueryList, ViewChildren} from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ElementRef, ViewChild } from '@angular/core';
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
  name:string="amr";
  @ViewChildren('nameDisplay') nameDisplay!:  QueryList<ElementRef>;
  @ViewChild('paragraph')paragraphele!:ElementRef;

printTemplateRefVar(templateRefVar:HTMLParagraphElement) {
  console.log(templateRefVar.textContent);
}
  printParagraph() {
    console.log(this.paragraphele.nativeElement.textContent);
  }
  handleName(nameInput: HTMLInputElement) {
    this.nameDisplay.forEach((element: ElementRef) => {
      element.nativeElement.textContent = nameInput.value;
    });
  }

}


