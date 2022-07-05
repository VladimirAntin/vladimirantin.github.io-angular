import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavModule} from './nav/nav.module';
import {HttpClientModule} from '@angular/common/http';
import {ContactmeModule} from './contactme/contactme.module';
import {SharedModule} from './shared/shared.module';
import {ProjectsModule} from './projects/projects.module';
import {SkillsModule} from './skills/skills.module';
import { FooterModule } from './footer/footer.module';
import {HomeModule} from './home/home.module';
import {RoomModule} from './room/room.module';
import { CvModule } from './cv/cv.module';
import { ParticlesComponent } from './particles/particles.component';


@NgModule({
    declarations: [
        AppComponent,
        ParticlesComponent
    ],
    imports: [
        BrowserModule, SharedModule, HomeModule, ProjectsModule, SkillsModule, FooterModule,
        NavModule, ContactmeModule, HttpClientModule, RoomModule, CvModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
