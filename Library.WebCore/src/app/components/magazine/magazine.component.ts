import { Component, OnInit, Inject  } from '@angular/core';
import { MagazineDataService } from '../../services/magazine.service';
import { Magazine } from '../../models/magazine.model';
//import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
@Component({
  templateUrl: './magazine.component.html'
})
export class MagazineComponent implements OnInit {
  public magazines: Magazine[];
  private editedRowIndex: number;
  private editedItem: Magazine;

  //public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private magazineDataService: MagazineDataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.magazineDataService.getMagazines().subscribe((data: Magazine[]) => this.magazines = data);
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

    sender.addRow(new Magazine());
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
