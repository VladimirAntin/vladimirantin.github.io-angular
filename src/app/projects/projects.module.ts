import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProjectsComponent} from './projects.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    ProjectsComponent
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
