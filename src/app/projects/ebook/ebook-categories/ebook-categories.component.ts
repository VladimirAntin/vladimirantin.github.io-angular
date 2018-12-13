import {Component, OnInit, ViewChild} from '@angular/core';
import {EbookCategoriesService} from './ebook-categories.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-ebook-categories',
  templateUrl: './ebook-categories.component.html',
  styleUrls: ['./ebook-categories.component.css']
})
export class EbookCategoriesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'options'];
  dataSource: MatTableDataSource<string>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(private _category: EbookCategoriesService) { }

  ngOnInit() {
    this._category.getAll().subscribe(c => {
      this.dataSource = new MatTableDataSource<string>(c);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}
