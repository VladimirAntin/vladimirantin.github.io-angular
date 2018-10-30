import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {value: number, name: string, icon: string, color: string, pattern?: string[], spans?: string[]}[] = [
    {value: 87, name: 'Java', icon: 'icon-java', color: 'black', pattern: ['Java8'], spans: this.generateArray(8)},
    {value: 78, name: 'JavaScript', icon: 'icon-js', color: 'gold', pattern: ['ES5', 'ES6'], spans: this.generateArray(2)},
    {value: 70, name: 'TypeScript', icon: 'icon-typescript', color: '#007bffe0'},
    {value: 80, name: 'Angular', icon: 'icon-angular', color: 'red', pattern: ['Angular 2', 'Angular 5', 'Angular 6'], spans: this.generateArray(3)},
    {value: 76, name: 'Spring', icon: 'icon-spring', color: '#6aab27', pattern: ['Spring boot', 'Spring Security', 'Spring Core']},
    {value: 78, name: 'MySQL', icon: 'icon-mysql', color: '#007bffe0'},
    {value: 86, name: 'Bootstrap', icon: 'icon-bootstrap', color: '#453a5f', pattern: ['Bootstrap 3', 'Bootstrap 4'], spans: this.generateArray(2)},
    {value: 86, name: 'Material Design', icon: 'icon-material_design', color: 'gray', spans: this.generateArray(3)},
    {value: 70, name: 'Git', icon: 'icon-git', color: 'sandybrown'},
    {value: 80, name: 'jQuery', icon: 'icon-jquery', color: '#007bffe0'},
    {value: 60, name: 'HTML', icon: 'icon-html', color: 'sandybrown', pattern: ['HTML5'], spans: this.generateArray(5)},
    {value: 46, name: 'CSS', icon: 'icon-css', color: 'blue', pattern: ['CSS3'], spans: this.generateArray(9)},
    {value: 15, name: 'PHP', icon: 'icon-php', color: '#5468a0', spans: this.generateArray(2)},
    {value: 28, name: 'Python', icon: 'icon-python', color: 'blue', spans: this.generateArray(5)},
    {value: 72, name: 'AngularJS', icon: 'icon-angularjs', color: 'red', spans: this.generateArray(5)},
    {value: 26, name: 'MongoDB', icon: 'icon-mongodb', color: '#6aab27', spans: this.generateArray(5)},
  ];
  constructor() { }

  ngOnInit() { }

  quotient(b: number) {
    return b % 2;
  }

  private generateArray(n: number): string[] {
    return Array.apply(null, {length: n}).map((value, index) => `path${index + 1}`);
  }

}
