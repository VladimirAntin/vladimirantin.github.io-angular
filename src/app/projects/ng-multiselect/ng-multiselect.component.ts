import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-multiselect',
  templateUrl: './ng-multiselect.component.html'
})
export class NgMultiselectComponent implements OnInit {


  links = [
    {onclick: () => this.open('https://www.npmjs.com/package/@antin502/ng-multiselect'), name: 'NPM', color: 'danger', icon: 'npm'},
    {onclick: () => this.open('https://github.com/vladimirantin/ng-multiselect'), name: 'GitHub', color: 'warning', icon: 'github'},
  ];
  list = [];
  selected = [{id: 1}];
  title = 'ng-multiselect';

  formatter = (i) => i.text;
  compareWith = (a) => a.id;

  option2 = {hide: {selectedItems: true}};
  option3 = {hide: {search: true, selectionAll: true}};

  formatJSON(o) {
    const retVal = Object.assign({}, o);
    return JSON.stringify(retVal, null, 4);
  }


  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.list.push({id: i, text: `id=${i}`});
    }
  }

  private open(a: string) {
    window.open(a, '_blank');
  }


}
