import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactmeComponent} from './contactme.component';
import {SharedModule} from '../shared/shared.module';
import { GiveMeFeedbackComponent } from './give-me-feedback/give-me-feedback.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [
    ContactmeComponent,
    GiveMeFeedbackComponent
  ],
  exports: [
    ContactmeComponent,
    GiveMeFeedbackComponent
  ],
  entryComponents: [GiveMeFeedbackComponent]
})
export class ContactmeModule { }
