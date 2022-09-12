import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'first-app';
  constructor(){
    console.log("I am from constructor")
  }
  ngOnInit(): void {
    console.log("I am from ngOnInit")
      
  }
}
