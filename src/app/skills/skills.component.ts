import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: {value: number, maxValue: number, name: string, icon: string, class: string, pattern?: string[]}[] = [
    {value: 0, maxValue: 94, name: 'Java', icon: 'java', class: 'dark', pattern: ['Spring boot', 'JWT', 'Hibernate', 'REST']},
    {value: 0, maxValue: 90, name: 'JavaScript', icon: 'js', class: 'gold'},
    {value: 0, maxValue: 85, name: 'TypeScript', icon: 'ts', class: 'blue'},
    {value: 0, maxValue: 80, name: 'Angular', icon: 'angular', class: 'red'},
    null
  ];
  constructor() { }

  ngOnInit() {
    this.skills.forEach((skill) => {
      if (skill != null) {
        const interval = setInterval(() => {
          skill.value++;
          if (skill.value === skill.maxValue) {
            clearInterval(interval);
          }
        }, 25);
      }
    });
  }

}
