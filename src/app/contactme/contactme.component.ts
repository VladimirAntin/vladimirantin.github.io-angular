import { Component, OnInit } from '@angular/core';
import {ContactService} from './contact.service';


@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

  sendObj = {
    name: '',
    email: '',
    text: '',
  };

  constructor(private _contact: ContactService) { }

  ngOnInit() {}

  send() {
    this._contact.updateMessages(this.sendObj);
  }

}
