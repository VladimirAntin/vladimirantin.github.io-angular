import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ng-typed',
  templateUrl: './ng-typed.component.html',
  styleUrls: ['./ng-typed.component.css']
})
export class NgTypedComponent implements OnInit {

  obj =
  {
    speed: 0.1,
    timeout: 1000,
    hideCursorOnComplete: false,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia, iusto nihil id, totam nemo perspiciatis rerum labore tenetur ab sint,
    libero perferendis maxime dolorum quae? Facilis vero totam iusto esse.`
  };

  items = [1];
  index = 1;

  constructor() {}

  ngOnInit() {
  }

  formatJSON() {
    const retVal = Object.assign({}, this.obj);
    delete retVal['text'];
    return retVal;
  }

  reset = () => {
    this.items = [];
    this.index++;
    this.items.push(this.index);
  }

}
