import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { State } from '@progress/kendo-data-query';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { GetBookViewItem } from '../../../models/bookViewModel/getBookViewItem';
import { GetBookViewModel } from '../../../models/bookViewModel/getBookViewModel';
import { PostBookViewItem } from '../../../models/bookViewModel/postBookViewItem';
import { GetPublicationHouseViewModel } from '../../../models/publicationHouseViewModel/getPublicationHouseViewModel';
import { GetPublicationHouseViewItem } from '../../../models/publicationHouseViewModel/getPublicationHouseViewItem';
import { GetAuthorViewModel } from '../../../models/authorViewModel/getAuthorViewModel';
import { GetAuthorViewItem } from '../../../models/authorViewModel/getAuthorViewItem';

import { AccountService } from '../../../services/account.service';
import { BookDataService } from '../../../services/book.service';
import { PublicationHouseDataService } from '../../../services/publicationHouse.service';
import { AuthorDataService } from '../../../services/author.service';

@Component({
    templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
    public books: GetBookViewItem[];
    public publicationHouses: GetPublicationHouseViewItem[];
    public authors: GetAuthorViewItem[];
    private editedRowIndex: number;
    private editedItem: PostBookViewItem;

    public isAdmin = this.accountService.isAdmin();
    public LoggedIn = this.accountService.isAuthenticated();

    public formGroup: FormGroup;

    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    constructor(private bookDataService: BookDataService, private publicationHouseDataService: PublicationHouseDataService, private accountService: AccountService,
        private authorDataService: AuthorDataService) { }

    ngOnInit() {
        this.load();
    }

    load() {
        this.bookDataService.getBooks().subscribe((books: GetBookViewModel) => this.books = books.books);
        this.publicationHouseDataService.getPublicationHouses().subscribe((data: GetPublicationHouseViewModel) => this.publicationHouses = data.publicationHouses);
        this.authorDataService.getAuthors().subscribe((data: GetAuthorViewModel) => this.authors = data.authors);
    }
    public removeHandler({ dataItem }) {
        this.bookDataService.deleteBook(dataItem.id).subscribe(data => this.load());;
    }
    public getPublicationHouses(id?: number): string[] {
        if ((id != null) && (this.books.find(x => x.id === id).publicationHouses != null)) {
            return this.books.find(x => x.id === id).publicationHouses.map(function (PublicationHouse) {
                return PublicationHouse.name;
            });;
        }
        return new Array<string>();
    }
    public getAuthors(id?: number): string[] {
        if ((id != null) && (this.books.find(x => x.id === id).authors != null)) {
            return this.books.find(x => x.id === id).authors.map(function (author) {
                return author.firstName +" "+author.lastName;
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
        this.formGroup = new FormGroup({
            'id': new FormControl({ value: 0, disabled: true }, Validators.required),
            'name': new FormControl('', Validators.required),
            'authors': new FormControl('', Validators.required),
            'dateOfPublishing': new FormControl(new Date(Date.now()), Validators.required),
            'publicationHouses': new FormControl('', Validators.required)
        });
        sender.addRow(this.formGroup);
    }

    public editHandler({ sender, rowIndex, dataItem }) {
        this.closeEditor(sender);
        this.formGroup = new FormGroup({
            'id': new FormControl({ value: dataItem.id, disabled: true }, Validators.required),
            'name': new FormControl(dataItem.name, Validators.required),
            'authors': new FormControl(dataItem.authors, Validators.required),
            'dateOfPublishing': new FormControl(new Date(dataItem.dateOfPublishing), Validators.required),
            'publicationHouses': new FormControl(dataItem.publicationHouses, Validators.required)
        });
        this.editedRowIndex = rowIndex;
        sender.editRow(rowIndex, this.formGroup);
    }

    public cancelHandler({ sender, rowIndex }) {
        this.closeEditor(sender, rowIndex);
        this.load();
    }

    public saveHandler({ sender, rowIndex, formGroup, isNew }) {
        var book: PostBookViewItem = formGroup.getRawValue();
        var oldDate = new Date(book.dateOfPublishing);
        book.dateOfPublishing = new Date(oldDate.getFullYear(), oldDate.getMonth(), oldDate.getDate(), 2, 0, 0);
        if (isNew) { this.bookDataService.createBook(book).subscribe(data => this.load()); }
        if (!isNew) { this.bookDataService.updateBook(book).subscribe(data => this.load()); }
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
