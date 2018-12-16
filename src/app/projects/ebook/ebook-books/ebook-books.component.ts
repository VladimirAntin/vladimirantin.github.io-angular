import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Ebook} from './ebook.model';
import {EbookBooksService} from './ebook-books.service';

@Component({
  selector: 'app-ebook-books',
  templateUrl: './ebook-books.component.html',
  styleUrls: ['./ebook-books.component.css']
})
export class EbookBooksComponent implements OnInit {

  displayedColumns: string[] = ['title', 'author', 'categories', 'year', 'options'];
  dataSource: MatTableDataSource<Ebook>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(private _books: EbookBooksService) { }

  ngOnInit() {
    this._books.getAll().subscribe(e => {
      this.dataSource = new MatTableDataSource<Ebook>(e);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  categories = (b: Ebook) => {
    if (!b.categories) return '';
    return b.categories.length === 1 ? b.categories[0] : b.categories.join(', ');
  }

}
