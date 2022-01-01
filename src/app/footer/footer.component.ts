import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  actions: {action: () => any, class: string, name: string}[] = [];
  currentYear = new Date();

  constructor() { }

  ngOnInit() {
  }

}
