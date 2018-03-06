import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { State, process } from '@progress/kendo-data-query';

import { PublicationHouseDataService } from '../../../services/publicationHouse.service';
import { GetPublicationHouseViewItem } from '../../../models/publicationHouseViewModel/getPublicationHouseViewItem';
import { PostPublicationHouseViewItem } from '../../../models/publicationHouseViewModel/postPublicationHouseViewItem';
import { GetPublicationHouseViewModel } from '../../../models/publicationHouseViewModel/getPublicationHouseViewModel';
import { PostPublicationHouseViewModel } from '../../../models/publicationHouseViewModel/postPublicationHouseViewModel';

import { AccountService } from '../../../services/account.service';

@Component({
    templateUrl: './publicationHouse.component.html'
})
export class PublicationHouseComponent implements OnInit {
    public publicationHouses: GetPublicationHouseViewItem[];
    private editedRowIndex: number;
    private editedItem: PostPublicationHouseViewItem;
    public isAdmin: boolean;

    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    constructor(private publicationHouseDataService: PublicationHouseDataService, private accountService: AccountService) { }

    ngOnInit() {
        this.load();
        this.isAdmin = this.accountService.isAdmin();
    }

    load() {
        this.publicationHouseDataService.getPublicationHouses().subscribe((data: GetPublicationHouseViewModel) => this.publicationHouses = data.publicationHouses);
    }

    public removeHandler({ dataItem }) {
        this.publicationHouseDataService.deletePublicationHouse(dataItem.id).subscribe(data => this.load());;
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.load();
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        sender.addRow(new PostPublicationHouseViewItem());
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
        var publicationHouseViewModel: PostPublicationHouseViewModel = new PostPublicationHouseViewModel();
        publicationHouseViewModel.postPublicationHouseViewItem = dataItem;
        if (isNew) { this.publicationHouseDataService.createPublicationHouse(publicationHouseViewModel).subscribe(data => this.load()); }
        if (!isNew) { this.publicationHouseDataService.updatePublicationHouse(publicationHouseViewModel).subscribe(data => this.load()); }
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
