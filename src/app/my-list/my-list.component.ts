import { Component, OnInit } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { MyListService } from './my-list.service';


@Component({
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  providers: [MyListService],
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  quote: any;

  constructor (private quotes: MyListService) { }

  ngOnInit() {
  }

  onButtonClick() {
    this.quotes.getRandom()
    .subscribe((quote) => this.quote = quote);   
   }

   
}
