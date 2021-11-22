import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CvComponent } from './cv.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule, PdfViewerModule
  ],
  declarations: [CvComponent],
  exports: [CvComponent]
})
export class CvModule { }
