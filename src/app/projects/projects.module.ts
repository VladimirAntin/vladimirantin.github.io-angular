import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProjectsComponent} from './projects.component';
import { NgTypedComponent } from './ng-typed/ng-typed.component';
import { NgMultiselectComponent } from './ng-multiselect/ng-multiselect.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    ProjectsComponent,
    NgTypedComponent,
    NgMultiselectComponent,
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
