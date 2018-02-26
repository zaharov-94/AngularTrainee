import { Component, OnInit, Inject  } from '@angular/core';
import { PublicationDataService } from '../../services/publication.service';
import { Publication } from '../../models/publication.model';
//import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { map } from 'rxjs/operators/map';
@Component({
  templateUrl: './publication.component.html'
})
export class PublicationComponent implements OnInit {
  public publications: Publication[];
  private editedRowIndex: number;
  private editedItem: Publication;

  //public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: 10
  };

  constructor(private publicationDataService: PublicationDataService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.publicationDataService.getPublications().subscribe((data: Publication[]) => this.publications = data);
  }

  public onStateChange(state: State) {
    this.gridState = state;

    this.load();
  }

}
