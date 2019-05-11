import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  actions: {action, class: string, name: string}[] = [
    { action: () => this.goTo('https://facebook.com/100000213469440'), class: 'fab fa-facebook-square', name: 'Антин Владимир'},
    { action: () => this.goTo('https://www.linkedin.com/in/vladimir-antin'), class: 'fab fa-linkedin', name: 'Vladimir Antin'},
    { action: () => this.goTo('https://www.instagram.com/kami.1196'), class: 'fab fa-instagram', name: 'kami.1196'},
  ];

  constructor() { }

  ngOnInit() {
  }

  goTo(url: string) {
    window.open(url, '_blank');
  }

}
