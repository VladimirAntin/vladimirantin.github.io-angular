import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html'
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  startLoad() {
    console.log('start');
  }

  completeCV() {
    console.log('stop');
  }

}
