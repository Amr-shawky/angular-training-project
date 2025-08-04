import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faExclamationTriangle ,faHome } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-notfound',
  imports: [FontAwesomeModule],
  templateUrl: './notfound.html',
  styleUrl: './notfound.css'
})
export class Notfound {
faExclamationTriangle = faExclamationTriangle;
faHome = faHome;
}
