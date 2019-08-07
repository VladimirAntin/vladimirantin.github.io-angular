import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects: { img: string, name: string, style?, link: string, text?, external?: any[], ngTyped: boolean }[] = [
    {
      img: 'assets/icons/tech/angular.svg',
      ngTyped: true,
      name: 'Ng Typed',
      style: { width: '5em' },
      link: 'ng-typed',
      external: [
        { onclick: () => this.open('https://www.npmjs.com/package/ng-typed'), name: 'NPM', color: 'danger', icon: 'npm' },
        { onclick: () => this.open('https://github.com/vladimirantin/ng-typed'), name: 'GitHub', color: 'warning', icon: 'github' }
      ],
      text: 'Ng Typed is lib for portfolio in Angular 6. This is simple type-on effect component for angular websites.'
    },
    {
      img: 'assets/ebook/ebook-project.png',
      name: 'eBook',
      link: './ebook',
      ngTyped: false,
      text: 'eBook is web application. Application created with Spring Boot framework, Angular framework and use Lucene lib for searching index of books. '
    },
  ];

  links = [
    { name: '1. View in my CV', route: '/cv' },
    { name: '2. Contact me', route: '/contact' }
  ];

  constructor() { }

  ngOnInit() {
  }


  private open(a: string) {
    window.open(a, '_blank');
  }

}
