import { Component, OnInit } from '@angular/core';
import {Query} from './model/query';
import {MatSnackBar} from '@angular/material';
import {BoolQuery} from './model/bool-query';
import {Ebook} from './ebook-books/ebook.model';
import {EbookSearchService} from './ebook-search.service';

@Component({
  selector: 'app-ebook',
  templateUrl: './ebook.component.html',
  styleUrls: ['./ebook.component.css']
})
export class EbookComponent implements OnInit {

  fields = ['title', 'author', 'keyword', 'text (NOT IN DEMO)', 'language (NOT IN DEMO)'];
  queries = ['Regular', 'Fuzzy (NOT IN DEMO)', 'Pharse (NOT IN DEMO)', 'Range (NOT IN DEMO)', 'Prefix'];
  loadingResult = false;
  result: Ebook[] = [];
  queryType = false;
  query = new Query();
  boolQuery = new BoolQuery();

  constructor(private snackBar: MatSnackBar, private searchService: EbookSearchService) {
    this.boolQuery.queries.push(new Query());
  }

  ngOnInit() {
  }

  changeQueryType(v) {
    this.queryType = !v;
  }

  changeQuery(v) {
    this.boolQuery.must = !v;
  }

  search(bool) {
    this.loadingResult = true;
    let queryTypeReturnService;
    if (bool) {
      queryTypeReturnService = this.searchService.searchBool(this.boolQuery);
    } else {
      queryTypeReturnService = this.searchService.search(this.query);
    }
    queryTypeReturnService.subscribe(data => {
      this.result = data;
      if (this.result.length === 0) {
        this.snackBar.open('Result is empty, try again!', 'Ok', {
          duration: 4000, verticalPosition: 'top'
        });
      }
      this.loadingResult = false;
    }, () => {
      this.loadingResult = false;
      this.snackBar.open('Error with your query, try again!', 'Ok', {
        duration: 4000, verticalPosition: 'top'
      });
    });
  }

  addField() {
    this.boolQuery.queries.push(new Query());
  }

  removeField(b) {
    const index = this.boolQuery.queries.indexOf(b);
    this.boolQuery.queries.splice(index, 1);
  }

  isValidBool() {
    return this.boolQuery.queries.filter((v) => v.value.trim() === '').length > 0;
  }

  keywords = (b: Ebook) => b.keywords.join(', ');
  title = (b: Ebook) => `${b.title} (${b.author})`;

  disabledDemo = (v: string) => v.indexOf('NOT IN DEMO') !== -1;
}
