import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-protofolio',
  templateUrl: './protofolio.component.html',
  styleUrls: ['./protofolio.component.css']
})
export class ProtofolioComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
     $(".item img").click(function(e){
      console.log(e.target);
     })

     
  }
}
