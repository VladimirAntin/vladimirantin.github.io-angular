import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactmeComponent} from '../contactme/contactme.component';
import {ProjectsComponent} from '../projects/projects.component';
import {SkillsComponent} from '../skills/skills.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {NgTypedModule} from 'ng-typed';
import {VarDirective} from './var.directive';
import { NgTypedComponent } from '../projects/ng-typed/ng-typed.component';
import {CvComponent} from '../cv/cv.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {LiveChatComponent} from '../room/live-chat/live-chat.component';
import {RoomComponent} from '../room/room.component';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import {NgParticlesModule} from "ng-particles";
import {NgMultiselectComponent} from "../projects/ng-multiselect/ng-multiselect.component";
import {NgMultiselectModule} from "@antin502/ng-multiselect";
import {SpringCoreComponent} from "../projects/spring-core/spring-core.component";
import {TagComponent} from "./tag/tag.component";
import {NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule} from "ngx-ui-loader";
import {NGX_LOADER} from "./variables";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatBadgeModule} from "@angular/material/badge";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";


const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Portfolio'}},
  { path: 'contact', component: ContactmeComponent, data: {title: 'Contact me'}},
  { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'}},
  { path: 'projects/spring-core', component: SpringCoreComponent, data: {title: 'Spring Core'}},
  { path: 'projects/spring-core/:version', component: SpringCoreComponent, data: {title: 'Spring Core'}},
  { path: 'projects/ng-typed', component: NgTypedComponent, data: {title: 'Ng Typed'}},
  { path: 'projects/ng-multiselect', component: NgMultiselectComponent, data: {title: 'Ng Multiselect'}},
  { path: 'skills', component: SkillsComponent, data: {title: 'Skills'}},
  { path: 'cv', component: CvComponent, data: {title: 'CV'}},
  { path: 'live-chat', component: RoomComponent, data: {title: 'Live-chat'}},
  { path: 'live-chat/:name', component: LiveChatComponent, data: {title: 'Live-chat'}},
  // {path: '**', component: HomeComponent, data: {title: 'Portfolio'}}
];

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MatSnackBarModule, MatCheckboxModule, MatMenuModule, MatExpansionModule,
    MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatBadgeModule, MatTooltipModule, MatToolbarModule, MatTabsModule,
    NgTypedModule, NgMultiselectModule, MatListModule, MatSidenavModule, MatDialogModule, LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }), NgParticlesModule, NgxUiLoaderModule.forRoot(NGX_LOADER), NgxUiLoaderHttpModule, NgxUiLoaderRouterModule
  ],
  declarations: [VarDirective, TagComponent],
  exports: [MatIconModule, MatButtonModule, RouterModule, MatInputModule, FormsModule, HttpClientModule, MatChipsModule, MatCheckboxModule,
    MatTooltipModule, MatToolbarModule, MatSnackBarModule, MatMenuModule, MatExpansionModule, MatGridListModule, MatProgressSpinnerModule, MatTabsModule,
    MatCardModule, MatBadgeModule, TagComponent, NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderRouterModule,
    MatListModule, NgTypedModule, NgMultiselectModule, VarDirective, MatSidenavModule, MatDialogModule, LazyLoadImageModule, NgParticlesModule]
})
export class SharedModule { }
