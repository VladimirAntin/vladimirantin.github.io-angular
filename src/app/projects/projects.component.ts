import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: {img: string, name: string}[] = [
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS'},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS'},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS'},
    {img: 'assets/work-in-progress.png', name: 'WORK IN PROGRESS'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
