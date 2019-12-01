import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatInputModule, MatExpansionModule,
  MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule,
  MatBadgeModule, MatTooltipModule, MatCheckboxModule, MatListModule, MatDialogModule, MatToolbarModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactmeComponent} from '../contactme/contactme.component';
import {ProjectsComponent} from '../projects/projects.component';
import {SkillsComponent} from '../skills/skills.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {NgTypedModule} from 'ng-typed';
import {VarDirective} from './var.directive';
import { NgTypedComponent } from '../projects/ng-typed/ng-typed.component';
import {CvComponent} from '../cv/cv.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {LiveChatComponent} from '../room/live-chat/live-chat.component';
import {RoomComponent} from '../room/room.component';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Portfolio'}},
  { path: 'contact', component: ContactmeComponent, data: {title: 'Contact me'}},
  { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'}},
  { path: 'projects/ng-typed', component: NgTypedComponent, data: {title: 'Ng Typed'}},
  { path: 'skills', component: SkillsComponent, data: {title: 'Skills'}},
  { path: 'cv', component: CvComponent, data: {title: 'CV'}},
  { path: 'live-chat', component: RoomComponent, data: {title: 'Live-chat'}},
  { path: 'live-chat/:name', component: LiveChatComponent, data: {title: 'Live-chat'}},
  // {path: '**', component: HomeComponent, data: {title: 'Portfolio'}}
];

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MatSnackBarModule, MatCheckboxModule, MatMenuModule, MatExpansionModule,
    MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatBadgeModule, MatTooltipModule, MatToolbarModule,
    NgTypedModule, MatListModule, MatSidenavModule, MatDialogModule, LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
  ],
  declarations: [VarDirective],
  exports: [MatIconModule, MatButtonModule, RouterModule, MatInputModule, FormsModule, HttpClientModule, MatChipsModule, MatCheckboxModule,
    MatTooltipModule, MatToolbarModule, MatSnackBarModule, MatMenuModule, MatExpansionModule, MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatBadgeModule,
    MatListModule, NgTypedModule, VarDirective, MatSidenavModule, MatDialogModule, LazyLoadImageModule]
})
export class SharedModule { }
