import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: {img: string, name: string, style?, link: string}[] = [
    {img: 'assets/icons/tech/angular.svg', name: 'Ng Typed', style: {width: '5em'}, link: 'ng-typed'},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS', link: ''},
  ];

  constructor() { }

  ngOnInit() {
  }

}
