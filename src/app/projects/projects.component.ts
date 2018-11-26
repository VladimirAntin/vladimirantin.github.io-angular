import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: {img: string, name: string, style?, link: string, text?, external?: any[]}[] = [
    {img: 'assets/icons/tech/angular.svg', name: 'Ng Typed', style: {width: '5em'}, link: 'ng-typed', external: [
      {onclick: () => this.open('https://www.npmjs.com/package/ng-typed'), name: 'NPM', color: 'danger', icon: 'npm'},
      {onclick: () => this.open('https://github.com/vladimirantin/ng-typed'), name: 'GitHub', color: 'warning', icon: 'github'}
    ],
      text: 'Ng Typed is lib for portfolio in Angular 6. This is simple type-on effect component for angular websites.'},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
  ];

  constructor() { }

  ngOnInit() {
  }


  private open(a: string) {
    window.open(a, '_blank');
  }

}
