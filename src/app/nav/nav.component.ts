import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {

  navItems = [
    {icon: 'home', hover: 'Home', showHover: false, route: ''},
    {customIcon: 'icon-skills', hover: 'Skills', showHover: false, route: '/skills'},
    {icon: 'cloud', hover: 'Projects', showHover: false, route: '/projects'},
    {customIcon: 'icon-cv', hover: 'CV', showHover: false, route: '/cv'},
    {customIcon: 'icon-email', hover: 'Contact', showHover: false, route: '/contact'},
    {icon: 'chat', hover: 'Live chat', showHover: false, route: '/live-chat', classes: 'animated infinite pulse', demo: true},
  ];

  drawerOpened = false;

  constructor(private _r: Router) { }

  ngOnInit() {
  }

  go(r: string) {
    this._r.navigateByUrl(r);
  }

}
