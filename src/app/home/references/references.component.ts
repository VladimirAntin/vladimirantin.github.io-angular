import {Component, Input, OnInit} from '@angular/core';
import {ngTyped, openExternalLink} from '../../shared/variables';

@Component({
  selector: 'references',
  templateUrl: './references.component.html'
})
export class ReferencesComponent implements OnInit {

  @Input() start = false;

  links = [
    {name: 'GitHub', action: () => openExternalLink('https://github.com/vladimirantin'), complete: false},
    {name: 'GitLab', action: () => openExternalLink('https://gitlab.com/antin502'), complete: false},
    {name: 'npm', action: () => openExternalLink('https://npmjs.com/~antin502'), complete: false},
  ];
  constructor() { }

  ngOnInit() {}

  text(text) {
    return Object.assign({}, ngTyped, { text: text });
  }

}
