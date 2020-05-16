import {Component, OnInit} from '@angular/core';
import {Group, GroupService} from '../group.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Message, MessageService} from "./message.service";
import {UserService} from "../user.service";
import {WsService} from "../../websocket/ws.service";
import {ChatWsService} from "./chat.ws.service";
import {MessageListenerService} from "../../websocket/message-listener.service";
import {WsListenerService} from "../../websocket/ws-listener.service";

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.scss']
})
export class LiveChatComponent implements OnInit {

  messages: Message[] = [];
  private groupName = '';

  message: Message = {
    user: {
      username: ''
    },
    text: ''
  };

  room = {active: false};
  group: Group;
  private scroller: number[] = [];
  changeScroller = (t) => {
    this.scroller.push(t);
    return this.scroller[0];
  }
  constructor(private _groups: GroupService, private _act: ActivatedRoute, private _router: Router,
              private _user: UserService, private _message: MessageService, private _chat: ChatWsService,
              private _ws: WsService, private _messageLister: MessageListenerService, private _wsListener: WsListenerService) {
    this.groupName = this._act.snapshot.paramMap.get('name').trim();
    _wsListener.isConnected().subscribe(c => {
      if (!c) { // lost connection
        this._ws.connect(this.groupName);
      }
    });
      _messageLister.receiveMessage().subscribe(s => {
        this.loadMessages()
      });
  }

  ngOnInit() {
    this._ws.connect(this.groupName);
    this._groups.getOne(this.groupName).subscribe(res => {
      if (!res) {this.getBack()}
      this.group = res;
      this.putUserIfExist();
    }, () => this.getBack());
  }

  getBack() {
    this._router.navigate(['/live-chat'])
  }

  send() {
    if (this.message.text.trim().length > 0) {
      this.message.createdAt = new Date();
      this.message.group = this.group;
      this._chat.send(this.groupName, Object.assign({}, this.message));
      this.message.text = '';
    }
  }
  putUserIfExist() {
    const user = this._user.getLoggedInUser();
    if (user) {
      this.message.user = user;
      this.room.active = true;
      this.loadMessages();
    } else {
      this.room.active = false;
    }
  }

  register() {
    this._user.registerUser(this.message.user.username).subscribe(() => this.putUserIfExist());
  }

  clickEnter(e) {
    if (e.keyCode === 13) {
      this.send();
    }
  }

  private loadMessages() {
    this._groups.getMessages(this.groupName).subscribe(res => {
      this.messages = res;
      setTimeout(() => {
        const objDiv = document.getElementById("messages");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 200)
    });
  }
}
