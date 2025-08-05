import { Component } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-changepassword',
  imports: [FontAwesomeModule],
  templateUrl: './changepassword.html',
  styleUrl: './changepassword.css'
})
export class Changepassword {
  faLock = faLock;

}
