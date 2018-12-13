import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {EbookComponent} from './ebook.component';
import { EbookNavComponent } from './ebook-nav/ebook-nav.component';
import {MatListModule, MatPaginatorModule} from '@angular/material';
import { EbookCategoriesComponent } from './ebook-categories/ebook-categories.component';
import { EbookBooksComponent } from './ebook-books/ebook-books.component';
import {EbookCategoriesService} from './ebook-categories/ebook-categories.service';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule, SharedModule, MatListModule, MatTableModule, MatPaginatorModule
  ],
  declarations: [EbookComponent, EbookNavComponent, EbookCategoriesComponent, EbookBooksComponent],
  exports: [EbookComponent, EbookNavComponent, EbookCategoriesComponent, EbookBooksComponent],
  providers: [EbookCategoriesService]
})
export class EbookModule { }
