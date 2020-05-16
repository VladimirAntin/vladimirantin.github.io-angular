import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ngTyped} from '../../shared/variables';

@Component({
  selector: 'information',
  templateUrl: './information.component.html'
})
export class InformationComponent implements OnInit {

  complete = {
    title: false,
    backend: false,
    frontend: false,
    city: false,
    country: false
  };

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
