import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {value: number, name: string, icon: string, color: string, pattern?: string[], spans?: string[]}[] = [
    {value: 87, name: 'Java', icon: 'icon-java', color: 'black',
      pattern: ['maven', 'Spring Boot', 'Hibernate', 'Spring security'], spans: this.generateArray(8)},
    {value: 78, name: 'JavaScript', icon: 'icon-js', color: 'gold',
      pattern: ['npm', 'ES5', 'ES6', 'TypeScript', 'Angular 2+', 'AngularJS', 'jQuery', 'VueJS'], spans: this.generateArray(2)},
    {value: 78, name: 'Database', icon: 'icon-db', color: '#007bffe0', pattern: ['MongoDB', 'MySQL'],  spans: this.generateArray(3)},
    {value: 70, name: 'Git', icon: 'icon-git', color: 'sandybrown'},
    {value: 60, name: 'HTML', icon: 'icon-html', color: 'sandybrown', pattern: ['HTML5'], spans: this.generateArray(5)},
    {value: 46, name: 'CSS', icon: 'icon-css', color: 'blue', pattern: ['CSS3', 'Sass', 'Less', 'Bootstrap', 'Material design'], spans: this.generateArray(9)},
    {value: 15, name: '', icon: 'icon-php', color: '#5468a0', pattern: ['Laravel'], spans: this.generateArray(8)},
    {value: 28, name: 'Python', icon: 'icon-python', color: 'blue', pattern: ['Flask'], spans: this.generateArray(5)},
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
