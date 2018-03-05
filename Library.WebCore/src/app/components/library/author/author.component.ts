import { Component, OnInit, Inject } from '@angular/core';
import { AuthorDataService } from '../../../services/author.service';
import { GetAuthorViewItem } from '../../../models/authorViewModel/getAuthorViewItem';
import { PostAuthorViewItem } from '../../../models/authorViewModel/postAuthorViewItem';
import { GetAuthorViewModel } from '../../../models/authorViewModel/getAuthorViewModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';
import { Observable } from 'rxjs/Observable';
import { State, process } from '@progress/kendo-data-query';
import { GridDataResult } from '@progress/kendo-angular-grid';

import { map } from 'rxjs/operators/map';
@Component({
    templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit {
    public authors: GetAuthorViewItem[];
    private editedRowIndex: number;
    private editedItem: PostAuthorViewItem;
    public formGroup: FormGroup;
    public isAdmin: boolean;

    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    constructor(private authorDataService: AuthorDataService, private accountService: AccountService) { }

    ngOnInit() {
        this.load();
        this.isAdmin = this.accountService.isAdmin();
    }

    load() {
        this.authorDataService.getAuthors().subscribe((data: GetAuthorViewModel) => this.authors = data.authors);
    }

    public removeHandler({ dataItem }) {
        this.authorDataService.deleteAuthor(dataItem.id).subscribe(data => this.load());;
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.load();
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        sender.addRow(new PostAuthorViewItem());
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
        if (isNew) { this.authorDataService.createAuthor(dataItem).subscribe(data => this.load()); }
        if (!isNew) { this.authorDataService.updateAuthor(dataItem).subscribe(data => this.load()); }
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
