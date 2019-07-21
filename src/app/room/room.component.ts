import { Component, OnInit } from '@angular/core';
import {MessageService} from './live-chat/message.service';
import {MatDialog} from '@angular/material';
import {LoginRoomComponent} from './login-room/login-room.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit {

  groupNames: string[] = [];
  groupName = '';
  user = {username: '', password: ''};

  constructor(private _ms: MessageService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getGroups();
  }

  private getGroups() {
    this._ms.getGroups().subscribe(g => this.groupNames = g);
  }

  login() {
    const dialogRef = this.dialog.open(LoginRoomComponent, {
      width: '40vw',
      data: {user: {username: '', password: ''}}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.user = result;
      }
    });
  }

  isAdmin() {
    return this.user.username === 'admin' && this.user.password === 'admin';
  }

  deleteOne(group) {
    this._ms.deletGroup(group).subscribe((t) => {
      t.subscribe(() => this.getGroups());
    });
  }

  generateName() {
    this.groupName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
