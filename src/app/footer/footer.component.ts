import { Component, OnInit } from '@angular/core';
import {openExternalLink} from '../shared/variables';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  actions: {action: () => any, class: string, name: string}[] = [
    { action: () => openExternalLink('https://facebook.com/100000213469440'), class: 'fab fa-facebook-square', name: 'Антин Владимир'},
    { action: () => openExternalLink('https://www.linkedin.com/in/vladimir-antin'), class: 'fab fa-linkedin', name: 'Vladimir Antin'},
    { action: () => openExternalLink('https://www.instagram.com/vladimir.antin'), class: 'fab fa-instagram', name: 'vladimir.antin'},
  ];
  currentYear = new Date();

  constructor() { }

  ngOnInit() {}

}
