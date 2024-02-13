import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assingmentOne';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    $("#loading").slideUp(10000)
  }
}
