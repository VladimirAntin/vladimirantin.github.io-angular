import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {NavComponent} from './nav.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    NavComponent,

  ],
  imports: [
    CommonModule, MatToolbarModule, SharedModule,
  ],
  exports: [NavComponent, MatToolbarModule]
})
export class NavModule { }
