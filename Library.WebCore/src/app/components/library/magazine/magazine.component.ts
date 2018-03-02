import { Component, OnInit, Inject } from '@angular/core';
import { MagazineDataService } from '../../../services/magazine.service';
import { GetMagazineViewItem } from '../../../models/magazineViewModel/getMagazineViewItem';
import { PostMagazineViewItem } from '../../../models/magazineViewModel/postMagazineViewItem';
import { GetMagazineViewModel } from '../../../models/magazineViewModel/getMagazineViewModel';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../../services/account.service';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
@Component({
    templateUrl: './magazine.component.html'
})
export class MagazineComponent implements OnInit {
    public magazines: GetMagazineViewItem[];
    private editedRowIndex: number;
    private editedItem: PostMagazineViewItem;
    public isAdmin: boolean;

    public view: Observable<GridDataResult>;
    public gridState: State = {
        sort: [],
        skip: 0,
        take: 10
    };

    constructor(private magazineDataService: MagazineDataService) { }

    ngOnInit() {
        this.load();
        this.isAdmin = AccountService.isAdmin;
    }

    load() {
        this.magazineDataService.getMagazines().subscribe((data: GetMagazineViewModel) => this.magazines = data.magazines);
    }

    public removeHandler({ dataItem }) {
        this.magazineDataService.deleteMagazine(dataItem.id).subscribe(data => this.load());;
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.load();
    }

    public addHandler({ sender }) {
        this.closeEditor(sender);

        sender.addRow(new PostMagazineViewItem());
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
        if (isNew) { this.magazineDataService.createMagazine(dataItem).subscribe(data => this.load()); }
        if (!isNew) { this.magazineDataService.updateMagazine(dataItem).subscribe(data => this.load()); }
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
