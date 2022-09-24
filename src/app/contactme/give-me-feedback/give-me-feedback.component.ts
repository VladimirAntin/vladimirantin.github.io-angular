import {Component, ContentChild, Inject, OnInit} from '@angular/core';
import {MessageInterface} from "../message.model";
import {ContactService} from "../contact.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-give-me-feedback',
  templateUrl: './give-me-feedback.component.html'
})
export class GiveMeFeedbackComponent implements OnInit {

  sendObj: MessageInterface = {
    name: '',
    email: 'anonymous',
    text: ''
  };

  private ip: string = '';
  @ContentChild('sendForm') sendForm !: NgForm;
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any, private _contact: ContactService,
              private snackBar: MatSnackBar, private _router: Router, private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      this.ip = res.ip;
    }, (e) => {});
  }


  feedback(rating = 1) {
    this.sendObj.text = `Rating: ${rating}, ip: ${this.ip}`;
    const okRating = rating > 3;
    this._contact.sendMessage({...this.sendObj, name: this.sendObj.name.trim() || 'anonymous', ip: this.ip}).subscribe( m => {
      this.snackBar.dismiss();
      let snack = this.snackBar.open(okRating? 'Thanks!': 'Why? Please give me feedback on contact page!', okRating? 'OK' : 'Open', {
        duration: 10000, verticalPosition: 'top'
      });
      snack.onAction().subscribe(() => {
        if (!okRating) {
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
