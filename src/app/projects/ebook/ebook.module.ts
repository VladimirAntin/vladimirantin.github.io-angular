import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {EbookComponent} from './ebook.component';
import { EbookNavComponent } from './ebook-nav/ebook-nav.component';
import {MatChipsModule, MatListModule, MatPaginatorModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule} from '@angular/material';
import { EbookCategoriesComponent } from './ebook-categories/ebook-categories.component';
import { EbookBooksComponent } from './ebook-books/ebook-books.component';
import {EbookCategoriesService} from './ebook-categories/ebook-categories.service';
import {MatTableModule} from '@angular/material/table';
import {EbookBooksService} from './ebook-books/ebook-books.service';
import { EbookNavToolbarComponent } from './ebook-nav-toolbar/ebook-nav-toolbar.component';
import {EbookSearchService} from './ebook-search.service';

@NgModule({
  imports: [
    CommonModule, SharedModule, MatListModule, MatTableModule, MatPaginatorModule, MatToolbarModule,
    MatSlideToggleModule, MatSelectModule, MatChipsModule
  ],
  declarations: [EbookComponent, EbookNavComponent, EbookCategoriesComponent, EbookBooksComponent, EbookNavToolbarComponent],
  exports: [EbookComponent, EbookNavComponent, EbookCategoriesComponent, EbookBooksComponent],
  providers: [EbookCategoriesService, EbookBooksService, EbookSearchService]
})
export class EbookModule { }
