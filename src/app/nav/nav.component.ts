import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems = [
    {icon: 'home', hover: 'Home', showHover: false, route: ''},
    {svgIcon: 'skills', hover: 'Skills', showHover: false, route: '/skills'},
    {icon: 'cloud', hover: 'Projects', showHover: false, route: '/projects'},
    {svgIcon: 'email', hover: 'Contact me', showHover: false, route: '/contact-me'},
  ];

  constructor(private _r: Router) { }

  ngOnInit() {
  }

  go(r: string) {
    this._r.navigateByUrl(r);
  }

}
