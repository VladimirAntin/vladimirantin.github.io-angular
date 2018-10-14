import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule, MatInputModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactmeComponent} from '../contactme/contactme.component';
import {ProjectsComponent} from '../projects/projects.component';
import {SkillsComponent} from '../skills/skills.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactmeComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'skills', component: SkillsComponent}

];


@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [MatIconModule, MatButtonModule, RouterModule, MatInputModule]
})
export class SharedModule { }
