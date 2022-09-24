import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {MessageInterface} from './message.model';

// https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server/blob/master/README.md
@Injectable({
  providedIn: 'root'
})
export class ContactService {


  // faker.github.io@gmail.com
  private postMessage = 'https://script.google.com/macros/s/AKfycbzLjykCg_kIwSLaMX5fXn0Os2HtrQ-nEsRzxSv_WMStc7iu-rk/exec';

  constructor(private _http: HttpClient) { }

  sendMessage(req: MessageInterface | any): Observable<MessageInterface> {
    const body = Object.keys(req)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(req[k])).join('&');
    const httpOptions = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/x-www-form-urlencoded' })
    };
    return this._http.post<MessageInterface>(this.postMessage, body, httpOptions);
  }

}
