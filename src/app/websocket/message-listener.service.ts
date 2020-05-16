import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Message} from "../room/live-chat/message.service";

@Injectable({
  providedIn: 'root'
})
export class MessageListenerService {

  private message = new Subject<Message>();

  receiveMessage(): Observable<Message> {
    return this.message.asObservable();
  }

  sendMesage(message: Message) {
    this.message.next(message);
  }

}
