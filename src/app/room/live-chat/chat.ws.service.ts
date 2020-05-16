import { Injectable } from '@angular/core';
import {WsService} from "../../websocket/ws.service";

@Injectable({
  providedIn: 'root'
})
export class ChatWsService {

  constructor(private _ws: WsService) {}

  send(groupName: string, params) {
    this._ws.setResourceUrl(`/ws/api/chatting/${groupName}`);
    let that = this;
    this._ws.isConnected().subscribe(function(c) {
      if (c) { // connection exist
        that._ws.send(params);
        this.unsubscribe(); // stop loop request
      }
    });
  }}
