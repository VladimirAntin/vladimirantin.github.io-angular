import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import {NavComponent} from './nav.component';
import {SharedModule} from '../shared/shared.module';
import { NavLogoComponent } from './nav-logo/nav-logo.component';

@NgModule({
  declarations: [
    NavComponent,
    NavLogoComponent,
  ],
  imports: [
    CommonModule, MatToolbarModule, SharedModule,
  ],
  exports: [NavComponent, NavLogoComponent, MatToolbarModule]
})
export class NavModule { }
