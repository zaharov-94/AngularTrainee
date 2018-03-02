
import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../../../services/book.service';
import { PublicationHouseDataService } from '../../../services/publicationHouse.service';
import { GetBookViewItem } from '../../../models/bookViewModel/getBookViewItem';
import { GetBookViewModel } from '../../../models/bookViewModel/getBookViewModel';
import { PostBookViewItem } from '../../../models/bookViewModel/postBookViewItem';
import { GetPublicationHouseViewModel } from '../../../models/publicationHouseViewModel/getPublicationHouseViewModel';
import { GetPublicationHouseViewItem } from '../../../models/publicationHouseViewModel/getPublicationHouseViewItem';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';

import { State } from '@progress/kendo-data-query';

@Component({
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
    public books: GetBookViewItem[];
    public publicationHouses: GetPublicationHouseViewItem[];
    private editedRowIndex: number;
    private editedItem: PostBookViewItem;
    public isAdmin: boolean;

    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    constructor(private bookDataService: BookDataService, private publicationHouseDataService: PublicationHouseDataService) { }

    ngOnInit() {
        this.load();
        this.isAdmin = AccountService.isAdmin;
    }

    load() {
        this.bookDataService.getBooks().subscribe((books: GetBookViewModel) => this.books = books.books);
        this.publicationHouseDataService.getPublicationHouses().subscribe((data: GetPublicationHouseViewModel) => this.publicationHouses = data.publicationHouses);
    }
    public removeHandler({ dataItem }) {
        this.bookDataService.deleteBook(dataItem.id).subscribe(data => this.load());;
    }
    public pubHouses(id?: number): string[] {
        if ((id != null) && (this.books.find(x => x.id === id).publicationHouses != null)) {
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
        sender.addRow(new PostBookViewItem());
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);

        this.editedRowIndex = rowIndex;
        this.editedItem = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }

    public saveHandler({ sender, rowIndex, dataItem, isNew }) {
        debugger;
        if ((dataItem.publicationHouses != null)&&(dataItem.publicationHouses.length!==0)){
            if (isNew) { this.bookDataService.createBook(dataItem).subscribe(data => this.load()); }
            if (!isNew) { this.bookDataService.updateBook(dataItem).subscribe(data => this.load()); }
            sender.closeRow(rowIndex);
            this.editedRowIndex = undefined;
            this.editedItem = undefined;
        }
    }

    private closeEditor(grid, rowIndex = this.editedRowIndex) {
        grid.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedItem = undefined;
    }
}
