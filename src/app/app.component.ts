import { Component, ViewChild, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer, Title} from '@angular/platform-browser';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import {InitService} from "./init.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {GiveMeFeedbackComponent} from "./contactme/give-me-feedback/give-me-feedback.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  clientHeight: number;

  @ViewChild('router', {static: false})
  private routerOutlet: RouterOutlet;

  showParticles = !window.navigator.platform.toLowerCase().includes('mac')

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _title: Title,
              router: Router, private _init: InitService, private snackBar: MatSnackBar) {

      router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const title = this.getTitle(router.routerState, router.routerState.root).join('-');
          _title.setTitle(`Vladimir Antin | ${title}`);
        }
      });
    this.clientHeight = (window.innerHeight / 100) * 90;
    setTimeout(() => {
      this.giveMeFB();
    }, 20000);

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

  ngOnInit() {
    this._init.heroku();
  }

  giveMeFB() {
    this.snackBar.openFromComponent(GiveMeFeedbackComponent, {
      duration: 900000, verticalPosition: 'top', horizontalPosition: 'right', panelClass: ['bg-light', 'm-2', 'border', 'border-info']
    });
  }
}
