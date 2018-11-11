import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProjectsComponent} from './projects.component';
import { NgTypedComponent } from './ng-typed/ng-typed.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    ProjectsComponent,
    NgTypedComponent
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
