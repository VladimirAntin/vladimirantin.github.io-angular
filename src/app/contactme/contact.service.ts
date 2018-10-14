import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from '../../../node_modules/rxjs';
import {ContactInterface} from './contact.model.ts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private rootUrl = 'https://api.myjson.com';

  constructor(private _http: HttpClient) { }

  get(): Observable<ContactInterface> {
    return this._http.get<ContactInterface>(`${this.rootUrl}/bins/jcooh`);
  }

  update(req: ContactInterface): Observable<ContactInterface> {
    return this._http.put<ContactInterface>(`${this.rootUrl}/bins/jcooh`, req);
  }

  updateMessages(message: {email, name, text}) {
    this.get().subscribe(a => {
      a.messages.push(message);
      this.update(a).subscribe();
    });
  }
}
