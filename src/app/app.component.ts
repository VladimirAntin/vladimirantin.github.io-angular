import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  clientHeight: number;

  myStyle = {
    'position': 'fixed',
    'width': '100%',
    'height': '100%',
    'z-index': -1,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'opacity': 0.4
  };

  myParams = {
    particles: {
      number: {
        value: 100,
      },
      color: {
        value: '#ff0000'
      },
      shape: {
        type: 'triangle',
      },
      move: {
        speed: 5
      }
    }
  };

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.clientHeight = (window.innerHeight / 100) * 85;
    // iconRegistry.addSvgIcon('python', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/python.svg'));

  }
}
