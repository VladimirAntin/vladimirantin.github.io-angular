import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: {value: number, name: string, icon: string, pattern?: string[], spans?: string[]}[] = [
    {value: 87, name: 'Java', icon: 'icon-java',
      pattern: ['maven', 'Spring Boot', 'Hibernate', 'Spring security'], spans: this.generateArray(8)},
    {value: 78, name: 'JavaScript', icon: 'icon-js',
      pattern: ['npm', 'ES5', 'ES6', 'TypeScript', 'Angular 2+', 'AngularJS', 'jQuery', 'VueJS'], spans: this.generateArray(2)},
    {value: 78, name: 'Database', icon: 'icon-db', pattern: ['MongoDB', 'MySQL'],  spans: this.generateArray(3)},
    {value: 70, name: 'Version Control', icon: 'icon-git', pattern: ['Git']},
    {value: 60, name: 'HTML', icon: 'icon-html', pattern: ['HTML5'], spans: this.generateArray(5)},
    {value: 46, name: 'CSS', icon: 'icon-css', pattern: ['CSS3', 'Sass', 'Less', 'Bootstrap', 'Material design'], spans: this.generateArray(9)},
    {value: 15, name: '', icon: 'icon-php', pattern: ['Laravel'], spans: this.generateArray(8)},
    {value: 28, name: 'Python', icon: 'icon-python', pattern: ['Flask'], spans: this.generateArray(5)},
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
