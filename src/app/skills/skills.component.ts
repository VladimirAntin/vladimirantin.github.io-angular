import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {value: number, maxValue: number, name: string, icon: string, class: string, pattern?: string[]}[] = [
    {value: 0, maxValue: 87, name: 'Java', icon: 'java', class: 'dark'},
    {value: 0, maxValue: 78, name: 'JavaScript', icon: 'js', class: 'gold', pattern: ['ES5', 'ES6']},
    {value: 0, maxValue: 70, name: 'TypeScript', icon: 'ts', class: 'blue'},
    {value: 0, maxValue: 80, name: 'Angular', icon: 'angular', class: 'red', pattern: ['Angular 2', 'Angular 5', 'Angular 6']},
    {value: 0, maxValue: 76, name: 'Spring', icon: 'spring', class: 'green', pattern: ['Spring boot', 'Spring Security', 'Spring Core']},
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
