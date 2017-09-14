import { Component, OnInit, ViewChild } from '@angular/core';
import {Http,Headers} from '@angular/http';
import { MyListService } from './my-list.service';
import {Popup} from 'ng2-opd-popup';


@Component({
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  providers: [MyListService],
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  quote: any;

  constructor (private quotes: MyListService,
               private popup: Popup) { }

  ngOnInit() {
  }

  @ViewChild('popup') popup1: Popup;

  onButtonClick() {
    this.quotes.getRandom()
    .subscribe((quote) => this.quote = quote);

    this.popup.options = {
      header: "Your custom header",
      color: "#5cb85c", // red, blue.... 
      widthProsentage: 40, // The with of the popou measured by browser width 
      animationDuration: 1, // in seconds, 0 = no animation 
      showButtons: true, // You can hide this in case you want to use custom buttons 
      confirmBtnContent: "OK", // The text on your confirm button 
      cancleBtnContent: "Cancel", // the text on your cancel button 
      confirmBtnClass: "btn btn-default", // your class for styling the confirm button 
      cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
      animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
  };

    this.popup.show(this.popup.options);
   
   }
}
