import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //the messageService variable below has to be public to be bound to something at messages.component.html
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
