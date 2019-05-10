import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  strings: any[];

  constructor() { }


  ngOnInit() {
    this.strings = 
    [
      "Content Stuff",
      "Content Stuff",
    ];
  }



}
