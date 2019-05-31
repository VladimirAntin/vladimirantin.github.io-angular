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
    hideCursor: false,
    cursor: '|',
    text:
    `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Officia, iusto nihil id, totam nemo perspiciatis rerum labore tenetur ab sint,
    libero perferendis maxime dolorum quae? Facilis vero totam iusto esse.
    Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
    a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
    and going through the cites of the word in classical literature, discovered the undoubtable source.
    Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
    This book is a treatise on the theory of ethics, very popular during the Renaissance.
    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`
  };

  items = [1];
  index = 1;
  links = [
    {onclick: () => this.open('https://www.npmjs.com/package/ng-typed'), name: 'NPM', color: 'danger', icon: 'npm'},
    {onclick: () => this.open('https://github.com/vladimirantin/ng-typed'), name: 'GitHub', color: 'warning', icon: 'github'},
  ];
  constructor() {}

  ngOnInit() {}

  formatJSON() {
    const retVal = Object.assign({}, this.obj);
    delete retVal['text'];
    return JSON.stringify(retVal, null, 4);
  }

  reset = () => {
    this.items = [];
    this.index++;
    this.items.push(this.index);
  }

  private open(a: string) {
    window.open(a, '_blank');
  }

}
