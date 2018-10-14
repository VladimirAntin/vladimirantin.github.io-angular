import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {SkillsComponent} from './skills.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    SkillsComponent
  ],
  exports: [
    SkillsComponent
  ]
})
export class SkillsModule { }
