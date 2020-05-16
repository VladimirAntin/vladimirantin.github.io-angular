import {Injectable} from '@angular/core';
import {WsListenerService} from './ws-listener.service';
import {Observable, of} from 'rxjs';
import {MessageListenerService} from './message-listener.service';
import {Message} from "../room/live-chat/message.service";
import {environment} from "../../environments/environment";
import {WebSocketResponse} from "./web-socket-response.model";

@Injectable({
  providedIn: 'root'
})
export class WsService {

  private serverUrl = 'ws/api/chatting';
  private resourceUrl = '';
  stompClient = null;
  Stomp;
  sockjsClient;

  constructor(private _wsListener: WsListenerService, private _messageListener: MessageListenerService) {
    this.Stomp = require('stompjs');
    this.sockjsClient = require('sockjs-client');
  }

  connect(groupName: string, callback?: (res) => void) {
    const socket = new this.sockjsClient(`${environment.api}/${this.serverUrl}/ws`);
    this.stompClient = this.Stomp.over(socket);
    this.stompClient.debug = null;
    const that = this;
    this.stompClient.connect({}, () => {
      this._wsListener.setConnected(this.stompClient.connected);
      that.stompClient.subscribe(`/${this.serverUrl}/topic/${groupName}`, (message: WebSocketResponse<Message | any>) => {
        let response: Message = JSON.parse(message.body);
        this._messageListener.sendMesage(response);
        if (callback) {
          callback(response);
        }
      }, {});
    });
  }

  setResourceUrl = (url) => this.resourceUrl = url;

  send(params: any) {
    this.stompClient.send(`${this.resourceUrl}`, {}, JSON.stringify(params));
  }

  dissconnect() {}

  isConnected(): Observable<boolean> {
    if (this.stompClient.connected) {
      return of(true);
    }
    this._wsListener.setConnected(this.stompClient.connected);
    return this._wsListener.isConnected();
  }
}
