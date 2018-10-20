import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  actions: {action, class: string, name: string}[] = [
    {action: () => this.goTo('https://facebook.com/100000213469440'), class: 'fab fa-facebook-square', name: 'Facebook'},
    {action: () => this.goTo('https://twitter.com/propali_umetnik'), class: 'fab fa-twitter-square', name: 'Twitter'},
    {action: () => this.goTo('https://www.linkedin.com/in/vladimir-antin'), class: 'fab fa-linkedin', name: 'LinkedIn'},
  ];

  constructor() { }

  ngOnInit() {
  }

  goTo(url: string) {
    window.open(url, '_blank');
  }

}
