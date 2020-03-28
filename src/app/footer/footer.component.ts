import { Component, OnInit } from '@angular/core';
import {openExternalLink} from '../shared/variables';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  actions: {action: () => any, class: string, name: string}[] = [
    { action: () => openExternalLink('https://facebook.com/kami.1196'), class: 'fab fa-facebook-square', name: 'Антин Владимир'},
    { action: () => openExternalLink('https://www.linkedin.com/in/vladimir-antin'), class: 'fab fa-linkedin', name: 'Vladimir Antin'},
    { action: () => openExternalLink('https://www.instagram.com/kami.1196'), class: 'fab fa-instagram', name: 'kami.1196'},
  ];
  currentYear = new Date();

  constructor() { }

  ngOnInit() {}

}
