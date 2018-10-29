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
    iconRegistry.addSvgIcon('skills', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/skills.svg'));
    iconRegistry.addSvgIcon('email', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'));
    iconRegistry.addSvgIcon('java', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/java.svg'));
    iconRegistry.addSvgIcon('ts', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/typescript.svg'));
    iconRegistry.addSvgIcon('js', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/js.svg'));
    iconRegistry.addSvgIcon('angular', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/angular.svg'));
    iconRegistry.addSvgIcon('spring', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/spring.svg'));

    iconRegistry.addSvgIcon('angularjs', sanitizer.bypassSecurityTrustResourceUrl('assets/icons//tehnology/angularjs.svg'));
    iconRegistry.addSvgIcon('bootstrap', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/bootstrap.svg'));
    iconRegistry.addSvgIcon('css', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/css.svg'));
    iconRegistry.addSvgIcon('git', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/git.svg'));
    iconRegistry.addSvgIcon('html', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/html.svg'));
    iconRegistry.addSvgIcon('jquery', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/jquery.svg'));
    iconRegistry.addSvgIcon('material-design', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/material_design.svg'));
    iconRegistry.addSvgIcon('mongo', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/mongo.svg'));
    iconRegistry.addSvgIcon('mysql', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/mysql.svg'));
    iconRegistry.addSvgIcon('php', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/php.svg'));
    iconRegistry.addSvgIcon('python', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/tehnology/python.svg'));

  }
}
