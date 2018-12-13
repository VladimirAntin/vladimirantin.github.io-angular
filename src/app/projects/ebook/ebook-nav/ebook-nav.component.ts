import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ebook-nav',
  templateUrl: './ebook-nav.component.html',
  styleUrls: ['./ebook-nav.component.css']
})
export class EbookNavComponent implements OnInit {

  nav_items = [
    {route: '/projects/ebook', icon: 'home', name: 'Home'},
    {route: '/projects/ebook/categories', icon: 'library_books', name: 'Categories'},
    {route: '/projects/ebook/books', fa_icon: 'fa-book', name: 'Books'}
  ];
  constructor(public _router: Router) { }

  ngOnInit() {
  }

}
