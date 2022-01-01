import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ngTyped} from '../../shared/variables';

@Component({
  selector: 'information',
  templateUrl: './information.component.html'
})
export class InformationComponent implements OnInit {

  complete: any = {};

  content = [
    {title: 'backend', children: [
      {name: 'Spring boot', tag: 'java', after: 'title'},
      {name: 'Symfony', tag: 'php', after: 'java'},
      {name: 'Flask', tag: 'python', after: 'php'},
    ]},
    {title: 'frontend', children: [
      {name: 'Angular', tag: 'typescript', after: 'python'},
      {name: 'React', tag: 'javascript...typescript', after: 'typescript'},
      {name: 'React native', tag: 'native', after: 'javascript...typescript'},
    ]}
  ]

  @Output() completeChange = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  text(text) {
    return Object.assign({}, ngTyped, { text: text });
  }

  allComplete() {
    this.completeChange.emit(true);
  }

}
