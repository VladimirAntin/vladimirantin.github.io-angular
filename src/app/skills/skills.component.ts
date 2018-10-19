import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {value: number, maxValue: number, name: string, icon: string, class: string, pattern?: string[]}[] = [
    {value: 0, maxValue: 87, name: 'Java', icon: 'java', class: 'dark', pattern: ['Java8']},
    {value: 0, maxValue: 78, name: 'JavaScript', icon: 'js', class: 'gold', pattern: ['ES5', 'ES6']},
    {value: 0, maxValue: 70, name: 'TypeScript', icon: 'ts', class: 'blue'},
    {value: 0, maxValue: 80, name: 'Angular', icon: 'angular', class: 'red', pattern: ['Angular 2', 'Angular 5', 'Angular 6']},
    {value: 0, maxValue: 76, name: 'Spring', icon: 'spring', class: 'green', pattern: ['Spring boot', 'Spring Security', 'Spring Core']},
    {value: 0, maxValue: 78, name: 'MySQL', icon: 'mysql', class: 'blue'},
    {value: 0, maxValue: 86, name: 'Bootstrap', icon: 'bootstrap', class: 'bootstrap', pattern: ['Bootstrap 3', 'Bootstrap 4']},
    {value: 0, maxValue: 86, name: 'Material Design', icon: 'material-design', class: 'gray'},
    {value: 0, maxValue: 70, name: 'Git', icon: 'git', class: 'orange'},
    {value: 0, maxValue: 80, name: 'jQuery', icon: 'jquery', class: 'blue'},
    {value: 0, maxValue: 60, name: 'HTML', icon: 'html', class: 'orange', pattern: ['HTML5']},
    {value: 0, maxValue: 46, name: 'CSS', icon: 'css', class: 'python', pattern: ['CSS3']},
    {value: 0, maxValue: 15, name: 'PHP', icon: 'php', class: 'php'},
    {value: 0, maxValue: 28, name: 'Python', icon: 'python', class: 'python'},
    {value: 0, maxValue: 72, name: 'AngularJS', icon: 'angularjs', class: 'red'},
    {value: 0, maxValue: 26, name: 'MongoDB', icon: 'mongo', class: 'green'},
  ];
  constructor() { }

  ngOnInit() {
    this.skills.forEach((skill) => {
      if (skill != null) {
        const interval = setInterval(() => {
          skill.value += 4;
          if (skill.value === skill.maxValue || skill.value > skill.maxValue) {
            skill.value = skill.maxValue;
            clearInterval(interval);
          }
        }, 5);
      }
    });
  }

}
