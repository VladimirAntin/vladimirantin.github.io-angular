import { Component, OnInit } from '@angular/core';
import {Group, GroupService} from './group.service';
import {MatDialog} from '@angular/material';
import {LoginRoomComponent} from './login-room/login-room.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html'
})
export class RoomComponent implements OnInit {

  groups: Group[] = [];
  groupName = '';
  user = {username: '', password: ''};

  constructor(private _group: GroupService, private dialog: MatDialog, private _router: Router) { }

  ngOnInit() {
    this._group.getAll().subscribe(s => this.groups = s.body);
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

  createChat() {
    this._group.post({name: this.groupName}).subscribe(() => this._router.navigate(['/live-chat', this.groupName]))
  }

  deleteOne(g: Group) {
    const index = this.groups.indexOf(g);
    this._group.removeOne(g.id).subscribe(() => this.groups.splice(index, 1));
  }

  isAdmin() {
    return this.user.username === 'admin' && this.user.password === 'admin';
  }

  generateName() {
    this.groupName = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
}
