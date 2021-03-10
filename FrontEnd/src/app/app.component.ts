import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string;
  footnotes :string;
   constructor() {
     // Constants
    this.title = 'Front-End Developer - Betting test';
    this.footnotes = 'Copyright Ⓒ BETSYS 2019 : All Rights Reserved ';
  }
}