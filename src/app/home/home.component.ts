import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show = {
    skills: false,
    contact: false
  };
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    doSomething(event) {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 1050) {
        this.show.skills = true;
      }
      if (window.screen.height > 800) {
        if (window.pageYOffset > 2000) {
          this.show.contact = true;
        }
        }
      if (window.screen.height < 800) {
        if (window.pageYOffset > 5400) {
          this.show.contact = true;
        }
      }
    }

}
