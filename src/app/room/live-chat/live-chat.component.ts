import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from './message.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

  messages: Message[] = [];
  private groupName = '';

  message: Message = {
    id: Math.random(),
    username: '',
    isConnected: true,
    text: ''
  };

  room = {active: false};
  private scroller: number[] = [];
  changeScroller = (t) => {
    this.scroller.push(t);
    return this.scroller[0];
  }
  constructor(private _ms: MessageService, private _act: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.message = JSON.parse(localStorage.getItem('user'));
    }
    this.groupName = this._act.snapshot.paramMap.get('name').trim();
    if (this.groupName === '') {
      this._router.navigateByUrl('/live-chat');
    }
    setInterval(() => this.getMessages(), 1200);
  }

  private getMessages() {
    this._ms._count(this.groupName).subscribe(count => {
      if (count !== this.messages.length) {
        this._ms.getMessages(this.groupName).subscribe(m => {
          this.messages = m;
        });
      }
    });
  }

  send() {
    this.message.createdAt = new Date();
    this._ms.sendMessage(Object.assign({}, this.message), this.groupName);
    this.message.text = '';
  }

  clickEnter(e) {
    if (e.keyCode === 13) {
      this.send();
    }
  }
}
