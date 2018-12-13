import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class EbookCategoriesService {

  link = '/assets/ebook/categories.json';
  constructor(private _http: HttpClient) {}

  getAll(): Observable<string[]> {
    return this._http.get<string[]>(this.link);
  }
}
