import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ContactService} from './contact.service';
import {MatSnackBar} from '@angular/material';
import {NgForm} from '@angular/forms';
import {MessageInterface} from './message.model';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html'
})
export class ContactmeComponent implements OnInit {

  sendObj: MessageInterface = {
    name: '',
    email: '',
    text: '',
  };
  @Input() styleDIV = {};
  @ViewChild('sendForm') sendForm: NgForm;
  contacts = [
    {icon: 'fa fa-phone-square', content: '+381 61 627 91 51'},
    {icon: 'fa fa-envelope-square', content: 'antin502@gmail.com'},
  ];
  contactForm = false;
  constructor(private _contact: ContactService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    setTimeout(() => this.contactForm = true, 900);
  }

  send() {
    this._contact.sendMessage(this.sendObj).subscribe( m => {
      this.snackBar.open('Thanks! Message has been sent.', 'OK', {
        duration: 4000, verticalPosition: 'top'
      });
      this.sendForm.resetForm();
    });
  }

}
