import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ParticlesModule} from 'angular-particle';
import {NavModule} from './nav/nav.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactmeModule} from './contactme/contactme.module';
import {SharedModule} from './shared/shared.module';
import {ProjectsModule} from './projects/projects.module';
import {SkillsModule} from './skills/skills.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, ParticlesModule, SharedModule, ProjectsModule, SkillsModule,
    NavModule, ContactmeModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
