import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./component/footer/footer";
import { Navbar } from "./component/navbar/navbar";
import { Settings } from './component/settings/settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Navbar,Settings],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'test2';
}
