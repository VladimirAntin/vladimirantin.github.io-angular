import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatInputModule, MatExpansionModule,
  MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatBadgeModule, MatTooltipModule, MatCheckboxModule} from '@angular/material';
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
import {NgCircleProgressModule} from 'ng-circle-progress';
import {NgTypedModule} from 'ng-typed';
import {VarDirective} from './var.directive';
import { NgTypedComponent } from '../projects/ng-typed/ng-typed.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Portfolio'}},
  { path: 'contact', component: ContactmeComponent, data: {title: 'Contact me'}},
  { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'}},
  { path: 'projects/ng-typed', component: NgTypedComponent, data: {title: 'Ng Typed'}},
  { path: 'skills', component: SkillsComponent, data: {title: 'Skills'}}

];

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule.forRoot(appRoutes),
    NgCircleProgressModule.forRoot({
      radius: 60,
      space: -10,
      outerStrokeWidth: 10,
      innerStrokeColor: '#e7e8ea',
      innerStrokeWidth: 10,
      showSubtitle: false,
      clockwise: false,
      startFromZero: true,
      animation: true,
      animationDuration: 200,
    }),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MatSnackBarModule, MatCheckboxModule, MatMenuModule, MatExpansionModule,
    MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatBadgeModule, MatTooltipModule,
    NgTypedModule
  ],
  declarations: [VarDirective],
  exports: [MatIconModule, MatButtonModule, RouterModule, MatInputModule, FormsModule, HttpClientModule, MatChipsModule, MatCheckboxModule,
    MatTooltipModule, MatSnackBarModule, MatMenuModule, MatExpansionModule, MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatBadgeModule,
  NgCircleProgressModule, NgTypedModule, VarDirective]
})
export class SharedModule { }
