import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WsListenerService {

  private subject = new Subject<any>();

  setConnected(connected: boolean) {
    this.subject.next(connected);
  }

  isConnected(): Observable<boolean> {
    return this.subject.asObservable();
  }

}
