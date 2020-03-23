import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InitService {

  private links = [
    'https://elearning-antin.herokuapp.com/',
    'https://ebook-antin.herokuapp.com/'
  ];
  constructor(private _http: HttpClient) { }

  heroku() {
    this.links.forEach(link => {
      this._http.get(link).subscribe();
    });
  }
}
