import { Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  complete = {
    title: false,
    city: false,
    country: false
  };

  private ngTyped = {
    speed: 100,
    timeout: 500,
    hideCursorOnComplete: true,
    cursor: '_'
  }
  constructor(private view: ViewContainerRef) { }

  ngOnInit() {}

  text(text) {
    return Object.assign({}, this.ngTyped, { text: text });
  }

}
