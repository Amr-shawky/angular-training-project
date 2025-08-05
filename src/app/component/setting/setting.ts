import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faGlobe, faBell, faMoon } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-setting',
  imports: [FontAwesomeModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css'
})
export class Setting {
  faGear = faGear;
  faGlobe = faGlobe;
  faBell = faBell;
  faMoon = faMoon;

  // Additional properties and methods can be added here as needed
}
