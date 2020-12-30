import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {InformationComponent} from './information/information.component';
import {SharedModule} from '../shared/shared.module';
import { ReferencesComponent } from './references/references.component';
import {AppModule} from "../app.module";

@NgModule({
    imports: [
        CommonModule, SharedModule
    ],
  declarations: [HomeComponent, InformationComponent, ReferencesComponent ],
  exports: [HomeComponent, InformationComponent, ReferencesComponent ]
})
export class HomeModule { }
