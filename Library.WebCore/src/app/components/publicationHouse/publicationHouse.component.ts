import { Component, OnInit, Inject  } from '@angular/core';
import { PublicationHouseDataService } from '../../services/publicationHouse.service';
import { PublicationHouse } from '../../models/publicationHouse.model';
//import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
@Component({
  templateUrl: './publicationHouse.component.html'
})
export class PublicationHouseComponent implements OnInit {
  public publicationHouses: PublicationHouse[];
  private editedRowIndex: number;
  private editedItem: PublicationHouse;

  //public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private publicationHouseDataService: PublicationHouseDataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.publicationHouseDataService.getPublicationHouses().subscribe((data: PublicationHouse[]) => this.publicationHouses = data);
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

    sender.addRow(new PublicationHouse());
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
    if (isNew) { this.publicationHouseDataService.createPublicationHouse(dataItem).subscribe(data => this.load()); }
    if (!isNew) { this.publicationHouseDataService.updatePublicationHouse(dataItem).subscribe(data => this.load()); }
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
