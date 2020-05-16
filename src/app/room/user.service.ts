import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RestTemplateService} from "../util/rest.template.service";
import {CoreModel} from "../util/core.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService extends RestTemplateService<User>{

  constructor(protected _http: HttpClient) {
    super(_http, 'api/users')
  }

  registerUser(username: string): Observable<User> {
    return this.post({username: username}).pipe(map(s => {
      localStorage.setItem('user', JSON.stringify(s));
      return s;
    }));
  }

  getLoggedInUser(): User {
    const jsString = localStorage.getItem('user');
    if (jsString) {
      return JSON.parse(jsString);
    }
    return undefined;
  }
}

export interface User extends CoreModel {
  username: string;
}
