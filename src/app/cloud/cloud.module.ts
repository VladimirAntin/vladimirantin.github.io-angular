import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CloudComponent} from "./cloud.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [CloudComponent],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [CloudComponent]
})
export class CloudModule { }
