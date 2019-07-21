import { Injectable } from '@angular/core';
import {Message} from './message.model';
import {Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private api = 'https://api.myjson.com/bins/jcooh';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8') };

  constructor(private _http: HttpClient) { }

  sendMessage(message: Message, group: string) {
    this.getAllMessages().pipe(map(mr => {
      const body = Object.assign(mr);
      if (!body.hasOwnProperty(group)) {
        body[group] = [];
      }
      body[group].push(message);
      this._http.put(this.api, body, this.options).subscribe();
    })).subscribe();
  }

  getMessages(group: string): Observable<Message[]> {
    return this.getAllMessages().pipe(map(mr => {
      if (!mr.hasOwnProperty(group)) {
        return [];
      }
      return mr[group];
    }));
  }

  _count(group: string): Observable<number> {
    return this.getMessages(group).pipe(map(m => m.length));
  }

  deletGroup(group: string) {
    return this.getAllMessages().pipe(map(mr => {
      const body = Object.assign(mr);
      if (body.hasOwnProperty(group)) {
        delete body[group];
      }
      return this._http.put(this.api, body, this.options);
    }));
  }

  private getAllMessages(): Observable<MessageResponse> {
    return this._http.get<MessageResponse>(this.api);
  }

  getGroups(): Observable<string[]> {
    return this.getAllMessages().pipe(map(m => Object.keys(m)));
  }

}

interface MessageResponse {
  [key: string]: Message[];
}
