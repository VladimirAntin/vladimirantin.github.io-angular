import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {value: number, name: string, icon: string, color: string, pattern?: string[]}[] = [
    {value: 87, name: 'Java', icon: 'java', color: 'black', pattern: ['Java8']},
    {value: 78, name: 'JavaScript', icon: 'js', color: 'gold', pattern: ['ES5', 'ES6']},
    {value: 70, name: 'TypeScript', icon: 'ts', color: '#007bffe0'},
    {value: 80, name: 'Angular', icon: 'angular', color: 'red', pattern: ['Angular 2', 'Angular 5', 'Angular 6']},
    {value: 76, name: 'Spring', icon: 'spring', color: '#6aab27', pattern: ['Spring boot', 'Spring Security', 'Spring Core']},
    {value: 78, name: 'MySQL', icon: 'mysql', color: '#007bffe0'},
    {value: 86, name: 'Bootstrap', icon: 'bootstrap', color: '#453a5f', pattern: ['Bootstrap 3', 'Bootstrap 4']},
    {value: 86, name: 'Material Design', icon: 'material-design', color: 'gray'},
    {value: 70, name: 'Git', icon: 'git', color: 'sandybrown'},
    {value: 80, name: 'jQuery', icon: 'jquery', color: '#007bffe0'},
    {value: 60, name: 'HTML', icon: 'html', color: 'sandybrown', pattern: ['HTML5']},
    {value: 46, name: 'CSS', icon: 'css', color: 'blue', pattern: ['CSS3']},
    {value: 15, name: 'PHP', icon: 'php', color: '#5468a0'},
    {value: 28, name: 'Python', icon: 'python', color: 'blue'},
    {value: 72, name: 'AngularJS', icon: 'angularjs', color: 'red'},
    {value: 26, name: 'MongoDB', icon: 'mongo', color: '#6aab27'},
  ];
  constructor() { }

  ngOnInit() { }

}
