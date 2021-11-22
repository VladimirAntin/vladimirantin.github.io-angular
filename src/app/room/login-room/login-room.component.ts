import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login-room',
  templateUrl: './login-room.component.html'
})
export class LoginRoomComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginRoomComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  submit(e): void {
    if (e.keyCode === 13) { // press enter
      this.dialogRef.close(this.data.user);
    }
  }
  ngOnInit() {}

}
