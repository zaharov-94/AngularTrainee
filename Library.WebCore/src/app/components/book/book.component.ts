import { Component, OnInit, Inject  } from '@angular/core';
import { BookDataService } from '../../services/book.service';
import { PublicationHouseDataService } from '../../services/publicationHouse.service';
import { Book } from '../../models/book.model';
import { PublicationHouse } from '../../models/publicationHouse.model';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
@Component({
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  public books: Book[];
  public publicationHouses: PublicationHouse[];
  private editedRowIndex: number;
  private editedItem: Book;

  //public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private bookDataService: BookDataService, private publicationHouseDataService: PublicationHouseDataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
      this.bookDataService.getBooks().subscribe((data: Book[]) => this.books = data);
      this.publicationHouseDataService.getPublicationHouses().subscribe((data: PublicationHouse[]) => this.publicationHouses = data);
  }
  public removeHandler({ dataItem }) {
    this.bookDataService.deleteBook(dataItem.id).subscribe(data => this.load());;
  }
  public pubHouses(id?: number): string[] {
      if (id != null) {
          return this.books.find(x => x.id === id).publicationHouses.map(function (pubHouse) {
              return pubHouse.name;
          });;
      }
      return new Array<string>();
  }
  public onStateChange(state: State) {
    this.gridState = state;

    this.load();
  }

  public addHandler({ sender }) {
      this.closeEditor(sender);
      sender.addRow(new Book());
  }

  public editHandler({ sender, rowIndex, dataItem }) {
    this.closeEditor(sender);

    this.editedRowIndex = rowIndex;
    this.editedItem = Object.assign({}, dataItem);
    sender.editRow(rowIndex);
  }

  public cancelHandler({ sender, rowIndex }) {
    this.closeEditor(sender, rowIndex);
  }

  public saveHandler({ sender, rowIndex, dataItem, isNew }) {
    if (isNew) { this.bookDataService.createBook(dataItem).subscribe(data => this.load()); }
    if (!isNew) { this.bookDataService.updateBook(dataItem).subscribe(data => this.load()); }
    sender.closeRow(rowIndex);

    this.editedRowIndex = undefined;
    this.editedItem = undefined;
  }

  private closeEditor(grid, rowIndex = this.editedRowIndex) {
    grid.closeRow(rowIndex);
    this.editedRowIndex = undefined;
    this.editedItem = undefined;
  }
}
