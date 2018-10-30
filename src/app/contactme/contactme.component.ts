import {Component, OnInit, ViewChild} from '@angular/core';
import {ContactService} from './contact.service';
import {MatSnackBar} from '@angular/material';
import {NgForm} from '@angular/forms';


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
  @ViewChild('sendForm') sendForm: NgForm;
  contacts = [
    {icon: 'fa fa-phone-square', content: '+381 61 627 91 51'},
    {icon: 'fa fa-envelope-square', content: 'antin502@gmail.com'},
  ];

  constructor(private _contact: ContactService, private snackBar: MatSnackBar) { }

  ngOnInit() {}

  send() {
    this._contact.updateMessages(this.sendObj, (m) => {
      this.snackBar.open('Thanks! Message has been sent.', 'OK', {
        duration: 4000, verticalPosition: 'top'
      });
      this.sendForm.resetForm();
    });
  }

}
