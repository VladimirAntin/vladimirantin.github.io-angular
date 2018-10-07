import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {ParticlesModule} from 'angular-particle';
import {NavModule} from './nav/nav.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactmeModule} from './contactme/contactme.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [
    BrowserModule, ParticlesModule, SharedModule,
    NavModule, ContactmeModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
