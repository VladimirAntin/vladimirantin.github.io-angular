import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NavModule} from './nav/nav.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactmeModule} from './contactme/contactme.module';
import {SharedModule} from './shared/shared.module';
import {ProjectsModule} from './projects/projects.module';
import {SkillsModule} from './skills/skills.module';
import { FooterModule } from './footer/footer.module';
import { CvComponent } from './cv/cv.component';
import { PdfViewerModule } from 'ng2-pdf-viewer'
;
@NgModule({
  declarations: [
    AppComponent, HomeComponent, CvComponent
  ],
  imports: [
    BrowserModule, SharedModule, ProjectsModule, SkillsModule, FooterModule,
    NavModule, ContactmeModule, HttpClientModule, PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
