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
import {CvComponent} from '../cv/cv.component';
import {ngxProgress} from './variables';
import {EbookComponent} from '../projects/ebook/ebook.component';
import {EbookCategoriesComponent} from '../projects/ebook/ebook-categories/ebook-categories.component';
import {EbookBooksComponent} from '../projects/ebook/ebook-books/ebook-books.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {title: 'Portfolio'}},
  { path: 'contact', component: ContactmeComponent, data: {title: 'Contact me'}},
  { path: 'projects', component: ProjectsComponent, data: {title: 'Projects'}},
  { path: 'projects/ng-typed', component: NgTypedComponent, data: {title: 'Ng Typed'}},
  { path: 'projects/ebook', component: EbookComponent, data: {title: 'Ebook'}},
  { path: 'projects/ebook/categories', component: EbookCategoriesComponent, data: {title: 'Ebook (Categories)'}},
  { path: 'projects/ebook/books', component: EbookBooksComponent, data: {title: 'Ebook (Books)'}},
  { path: 'skills', component: SkillsComponent, data: {title: 'Skills'}},
  { path: 'cv', component: CvComponent, data: {title: 'CV'}}
];

@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatInputModule, RouterModule.forRoot(appRoutes),
    NgCircleProgressModule.forRoot(ngxProgress),
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
