import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RestTemplateService} from "../util/rest.template.service";
import {CoreModel} from "../util/core.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Message} from "./live-chat/message.service";

@Injectable({
  providedIn: 'root'
})
export class GroupService extends RestTemplateService<Group> {

  constructor(protected _http: HttpClient) {
    super(_http, 'api/groups')
  }

  getMessages(name: string): Observable<Message[]> {
    return this._http.get<Message[]>(`${environment.api}/${this.url}/${name}/messages`);
  }
}

export interface Group extends CoreModel{
  name: string;
}
