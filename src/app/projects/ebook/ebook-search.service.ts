import { Injectable } from '@angular/core';
import {EbookBooksService} from './ebook-books/ebook-books.service';
import {Observable} from 'rxjs';
import {Ebook} from './ebook-books/ebook.model';
import {map} from 'rxjs/operators';
import {BoolQuery} from './model/bool-query';
import {Query} from './model/query';

@Injectable()
export class EbookSearchService {

  private queries = {
    Regular: (v1, v2) => v1.toLowerCase().indexOf(v2.toLowerCase()) > -1,
    Prefix: (v1, v2) => v1.toLowerCase().startsWith(v2.toLowerCase())
  };

  constructor(private _ebook: EbookBooksService) { }

  search(q: Query): Observable<Ebook[]> {
    return this._ebook.getAll().pipe(map(e => {
      const bq = new BoolQuery();
      bq.queries.push(q);
      return this.filterByQuery(e, bq);
    }));
  }

  searchBool(bq: BoolQuery): Observable<Ebook[]> {
    return this._ebook.getAll().pipe(map(e => {
      return this.filterByQuery(e, bq);
    }));
  }

  private filterByQuery(e: Ebook[], bq: BoolQuery) {
    let books = [];
    let must = Object.assign([], e);
    for (const q of bq.queries) {
      if (q.field === 'keyword') {
        if (bq.must) {
          books = this.filterBooksByKeywords(must, q);
          must = Object.assign([], books);
        } else {
          books = books.concat(this.filterBooksByKeywords(e, q));
        }
      } else {
        if (bq.must) {
          books = this.filterBooksByAttr(must, q);
          must = Object.assign([], books);
        } else {
          books = books.concat(this.filterBooksByAttr(e, q));
        }
      }
    }
    return this.removeDuplicateFromArray(books);
  }

  private highlight(v1, v2) {
    return v1.replace(new RegExp(v2, 'i'), match => `<span class="highlight">${match}</span>`).replace('<span class="highlight"></span>', '');
  }

  private removeDuplicateFromArray(l: any[]) {
    const newL = [];
    l.forEach(v => {
      if (newL.filter(i => i.id === v.id).length === 0) {
        newL.push(v);
      }
    });
    return newL;
  }

  private filterBooksByKeywords(e: Ebook[], q: Query) {
    return e.filter(b => {
      const keywords = [];
      let exist = false;
      for (const k of b.keywords) {
        if (this.queries[q.numQ](k, q.value)) {
          exist = true;
          keywords.unshift(this.highlight(k, q.value));
        } else {
          keywords.push(k);
        }
      }
      b.keywords = keywords.sort((x, y) => {
        if (x.indexOf('<mark>') !== -1) {
          return 1;
        } else if (y.indexOf('<mark>') !== -1) {
          return -1;
        }
        return 0;
      });
      return exist;
    });
  }

  private filterBooksByAttr(e: Ebook[], q: Query) {
    return e.filter(b => this.queries[q.numQ](b[q.field], q.value)).map(b => {
      b[q.field] = this.highlight(b[q.field], q.value);
      return b;
    });
  }

}
