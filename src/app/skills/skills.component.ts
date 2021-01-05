import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {

  skills: { name: string, icon: string, pattern?: string[], spans?: string[] }[] = [
    {
      name: 'Programming languages',
      icon: 'icon-languages',
      pattern: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS (Scss, less)', 'JSON', 'Basics of SQL', 'Basics of NoSQL'],
      spans: this.generateArray(39)
    },
    {
      name: 'Frameworks and libraries',
      icon: 'icon-framework',
      pattern: ['Spring boot', 'Angular', 'NestJS', 'React', 'React native'],
      spans: this.generateArray(21)
    },
    {name: 'Database', icon: 'icon-db', pattern: ['MongoDB', 'MySQL'], spans: this.generateArray(13)},
    {
      name: 'Project Management',
      icon: 'icon-project-management',
      pattern: ['maven', 'npm'],
      spans: this.generateArray(34)
    },
    {
      name: 'IDE',
      icon: 'icon-ide',
      pattern: ['IntelliJ IDEA', 'WebStorm', 'Visual Studio Code', 'Eclipse', 'Sublime Text'],
      spans: this.generateArray(39)
    },
    {name: 'Systems', icon: 'icon-os', pattern: ['Mac OSX', 'Linux', 'Windows'], spans: this.generateArray(40)},
    {name: 'Version Control', icon: 'icon-git', pattern: ['Git']},
    {
      name: 'Other',
      icon: 'icon-other',
      pattern: ['WebSocket', 'REST', 'JWT', 'Bootstrap', 'Material design', 'Fontawesome icons', 'Material icons'],
      spans: this.generateArray(17)
    },
    {
      name: 'I am currently learning',
      icon: 'icon-learn',
      pattern: ['oAuth', 'GraphQL', 'Electron', 'Docker'],
      spans: this.generateArray(34)
    },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  quotient(b: number) {
    return b % 2;
  }

  private generateArray(n: number): string[] {
    return Array.apply(null, {length: n}).map((value, index) => `path${index + 1}`);
  }

}
