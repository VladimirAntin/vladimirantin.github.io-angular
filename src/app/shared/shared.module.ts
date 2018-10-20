import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatInputModule, MatExpansionModule,
  MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatBadgeModule, MatTooltipModule} from '@angular/material';
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

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactmeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'skills', component: SkillsComponent}

];

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, FormsModule, HttpClientModule, MatSnackBarModule, MatMenuModule, MatExpansionModule,
    MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatChipsModule, MatBadgeModule, MatTooltipModule
  ],
  declarations: [],
  exports: [MatIconModule, MatButtonModule, RouterModule, MatInputModule, FormsModule, HttpClientModule, MatChipsModule, MatTooltipModule,
  MatSnackBarModule, MatMenuModule, MatExpansionModule, MatGridListModule, MatProgressSpinnerModule, MatCardModule, MatBadgeModule]
})
export class SharedModule { }
