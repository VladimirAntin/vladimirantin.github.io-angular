import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ebook} from './ebook.model';

@Injectable()
export class EbookBooksService {

  link = '/assets/ebook/books.json';
  constructor(private _http: HttpClient) {}

  getAll(): Observable<Ebook[]> {
    return this._http.get<Ebook[]>(this.link);
  }

}
