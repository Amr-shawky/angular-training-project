import { Component, ElementRef } from '@angular/core';
import { ContentChild} from '@angular/core';
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
//content child projection --> view content 
  @ContentChild('P') content!: ElementRef<HTMLParagraphElement>;

  printContent() {
    console.log(this.content.nativeElement.textContent);
    this.content.nativeElement.textContent = 'Updated content from child component';
  }
}
