import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {ProjectsComponent} from './projects.component';
import { NgTypedComponent } from './ng-typed/ng-typed.component';
import { EbookComponent } from './ebook/ebook.component';
import {EbookModule} from './ebook/ebook.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, EbookModule
  ],
  declarations: [
    ProjectsComponent,
    NgTypedComponent,
  ],
  exports: [
    ProjectsComponent, EbookModule
  ]
})
export class ProjectsModule { }
