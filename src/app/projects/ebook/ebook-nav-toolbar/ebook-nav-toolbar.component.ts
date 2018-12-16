import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ebook-nav-toolbar',
  templateUrl: './ebook-nav-toolbar.component.html',
  styleUrls: ['./ebook-nav-toolbar.component.css']
})
export class EbookNavToolbarComponent implements OnInit {

  nav_items = [
    {route: '/projects/ebook', icon: 'home', name: 'Home'},
    {route: '/projects/ebook/categories', icon: 'library_books', name: 'Categories'},
    {route: '/projects/ebook/books', fa_icon: 'fa-book', name: 'Books'},
    {route: 'javascript;', icon: 'edit', name: 'Change password', disabled: true},
    {route: 'javascript;', icon: 'edit', name: 'Edit profile', disabled: true},
    // {route: 'javascript;', icon: 'input', name: 'Login'},
    {route: 'javascript;', icon: 'input', name: 'Logout', disabled: true},
  ];

  constructor() { }

  ngOnInit() {
  }

}
