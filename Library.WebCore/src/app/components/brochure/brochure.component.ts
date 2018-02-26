import { Component, OnInit, Inject  } from '@angular/core';
import { BrochureDataService } from '../../services/brochure.service';
import { Brochure } from '../../models/brochure.model';
//import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
@Component({
  templateUrl: './brochure.component.html'
})
export class BrochureComponent implements OnInit {
  public brochures: Brochure[];
  private editedRowIndex: number;
  private editedItem: Brochure;

  //public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private brochureDataService: BrochureDataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.brochureDataService.getBrochures().subscribe((data: Brochure[]) => this.brochures = data);
  }

  public removeHandler({ dataItem }) {
    this.brochureDataService.deleteBrochure(dataItem.id).subscribe(data => this.load());;
  }

  public onStateChange(state: State) {
    this.gridState = state;

    this.load();
  }

  public addHandler({ sender }) {
    this.closeEditor(sender);

    sender.addRow(new Brochure());
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
    if (isNew) { this.brochureDataService.createBrochure(dataItem).subscribe(data => this.load()); }
    if (!isNew) { this.brochureDataService.updateBrochure(dataItem).subscribe(data => this.load()); }
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
