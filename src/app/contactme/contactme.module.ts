import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactmeComponent} from './contactme.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    ContactmeComponent
  ],
  exports: [
    ContactmeComponent
  ]
})
export class ContactmeModule { }
