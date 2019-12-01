import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  projects: { img: string, name: string, style?, onclick: () => void, text?, external?: any[], ngTyped: boolean, load: boolean }[] = [
    {
      img: 'assets/icons/tech/angular.svg',
      ngTyped: true,
      name: 'Ng Typed',
      style: { width: '5em' },
      onclick: () => this._router.navigateByUrl('projects/ng-typed'),
      load: false,
      external: [
        { onclick: () => this.open('https://www.npmjs.com/package/ng-typed'), name: 'NPM', color: 'danger', icon: 'npm' },
        { onclick: () => this.open('https://github.com/vladimirantin/ng-typed'), name: 'GitHub', color: 'warning', icon: 'github' }
      ],
      text: 'Ng Typed is lib for portfolio in Angular 6. This is simple type-on effect component for angular websites.'
    },
    {
      img: 'assets/ebook/ebook-project.png',
      name: 'eBook (Heroku)',
      onclick: () => this.open('https://ebook-antin.herokuapp.com/'),
      ngTyped: false,
      style: {},
      load: false,
      external: [
        { onclick: () => this.open('https://gitlab.com/antin502/ebook'), name: 'GitLab', color: 'warning', icon: 'gitlab' },
        { onclick: () => this.open('https://github.com/VladimirAntin/ebook'), name: 'GitHub', color: 'light', icon: 'github' }
      ],
      text: 'eBook is web application. Application created with Spring Boot framework, Angular framework and use Lucene lib for searching index of books.'
    },
    {
      img: 'assets/elearning/elearning-project.png',
      name: 'eLearning (Heroku)',
      onclick: () => this.open('https://elearning-antin.herokuapp.com/'),
      ngTyped: false,
      style: {},
      load: false,
      external: [],
      text: 'eLearning is web application. Application created with Spring Boot framework, Angular framework and use websockets for live chat.'
    },
  ];

  links = [
    { name: '1. View in my CV', route: '/cv' },
    { name: '2. Contact me', route: '/contact' }
  ];

  constructor(private _router: Router) { }

  ngOnInit() {
  }


  private open(a: string) {
    window.open(a, '_blank');
  }

}
