import { Injectable } from '@angular/core';
import {CoreModel} from "../../util/core.model";
import {HttpClient} from "@angular/common/http";
import {RestTemplateService} from "../../util/rest.template.service";
import {User} from "../user.service";
import {Group} from "../group.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService extends RestTemplateService<Message> {

  constructor(protected _http: HttpClient) {
    super(_http, 'api/messages')
  }

}

export interface Message extends CoreModel{
  user: User;
  group?: Group;
  text: string;
  createdAt?: Date;
}
