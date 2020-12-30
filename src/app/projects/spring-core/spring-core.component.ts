import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {dependency, path} from "./spring-core.const";
import * as v1 from "./spring-core.v1.1";
import * as v2 from "./spring-core.v1.2";

@Component({
  selector: 'app-spring-core',
  templateUrl: './spring-core.component.html'
})
export class SpringCoreComponent implements OnInit {

  links = [
    { onclick: () => this.open('https://mvnrepository.com/artifact/com.github.vladimirantin/spring-core'), name: 'Maven', color: 'primary', iconText: 'm' },
    {onclick: () => this.open('https://github.com/vladimirantin/spring-core'), name: 'GitHub', color: 'warning', icon: 'github'},
  ];
  versions = [
    {title: 'v1.1 (Core)', content: v1, dependency: dependency('1.1'), path: path('1.1')},
    {title: 'v1.2 (AuditLog)', content: v2, dependency: dependency('1.2'), path: path('1.2')}
  ]
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {
  }

  private open(a: string) {
    window.open(a, '_blank');
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this._snackBar.open('Text copied', 'Ok' , {
      duration: 5000,
      verticalPosition: 'top'
    });
  }

}
