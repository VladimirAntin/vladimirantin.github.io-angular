import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {dependency, path} from "./spring-core.const";
import * as v1 from "./spring-core.v1.1";
import * as v2 from "./spring-core.v1.2";
import * as v3 from "./spring-core.v1.3";
import * as v4 from "./spring-core.v1.4";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-spring-core',
  templateUrl: './spring-core.component.html'
})
export class SpringCoreComponent implements OnInit {

  activeTab = 'v1.4';
  activeIndex = 3;

  links = [
    { onclick: () => this.open('https://mvnrepository.com/artifact/com.github.vladimirantin/spring-core'), name: 'Maven', color: 'primary', iconText: 'm' },
    {onclick: () => this.open('https://github.com/vladimirantin/spring-core'), name: 'GitHub', color: 'warning', icon: 'github'},
  ];
  versions = [
    {title: 'v1.1 (Core)', content: v1, dependency: dependency('1.1'), path: path('1.1'), tabId: 'v1.1'},
    {title: 'v1.2 (AuditLog)', content: v2, dependency: dependency('1.2'), path: path('1.2'), tabId: 'v1.2'},
    {title: 'v1.3 (Extended controller)', content: v3, dependency: dependency('1.3'), path: path('1.3'), tabId: 'v1.3'},
    {title: 'v1.4 (Base security)', content: v4, dependency: dependency('1.4'), path: path('1.4'), tabId: 'v1.4'}
  ]
  constructor(private _snackBar: MatSnackBar, private _activeRoute: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    const versionId = this._activeRoute.snapshot.paramMap.get('version');
    const exists = this.versions.find(item => item.tabId === versionId)
    if (exists) {
      const index = this.versions.indexOf(exists);
      this.activeTab = versionId;
      this.activeIndex = index;
    } else {
      this.changeTab(this.activeIndex);
    }

  }

  changeTab(index) {
    this._router.navigateByUrl(`projects/spring-core/${this.versions[index].tabId}`)
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
