import { Component, ViewChild } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer, Title} from '@angular/platform-browser';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

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

  @ViewChild('router')
  private routerOutlet: RouterOutlet;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _title: Title,
    router: Router) {
      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const title = this.getTitle(router.routerState, router.routerState.root).join('-');
          _title.setTitle(`Vladimir Antin | ${title}`);
        }
      });
    this.clientHeight = (window.innerHeight / 100) * 85;
    // iconRegistry.addSvgIcon('python', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/python.svg'));
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

}
