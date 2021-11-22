import {Component, ContentChild, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";
import {MessageInterface} from "../message.model";
import {ContactService} from "../contact.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-give-me-feedback',
  templateUrl: './give-me-feedback.component.html'
})
export class GiveMeFeedbackComponent {

  sendObj: MessageInterface = {
    email: '',
    text: '',
  };
  @ContentChild('sendForm', {static: false}) sendForm !: NgForm;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private _contact: ContactService,
              private snackBar: MatSnackBar, private _router: Router) { }

  feedback(like = true) {
    this.sendObj.text = like? 'I like website.' : `I don't like website.`;
    this._contact.sendMessage(this.sendObj).subscribe( m => {
      this.snackBar.dismiss();
      let snack = this.snackBar.open(like? 'Thanks!': 'Why? Please give me feedback on contact page!', like? 'OK' : 'Open', {
        duration: 10000, verticalPosition: 'top'
      });
      snack.onAction().subscribe(() => {
        if (!like) {
          this._router.navigateByUrl('/contact')
        }
      })
      this.sendForm.resetForm();
    });
  }

  close() {
    this.snackBar.dismiss();
  }

}
