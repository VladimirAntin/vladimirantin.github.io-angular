import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatIconModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {ContactmeComponent} from '../contactme/contactme.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact-me', component: ContactmeComponent}

];


@NgModule({
  imports: [
    CommonModule, MatIconModule, MatButtonModule, RouterModule.forRoot(appRoutes),
  ],
  declarations: [],
  exports: [MatIconModule, MatButtonModule, RouterModule]
})
export class SharedModule { }
