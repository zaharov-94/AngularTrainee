import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { State, process } from '@progress/kendo-data-query';

import { GetPublicationViewItem } from '../../../models/publicationViewModel/getPublicationViewItem';
import { GetPublicationViewModel } from '../../../models/publicationViewModel/getPublicationViewModel';

import { PublicationDataService } from '../../../services/publication.service';
@Component({
    templateUrl: './publication.component.html'
})
export class PublicationComponent implements OnInit {
    public publications: GetPublicationViewItem[];

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
        this.publicationDataService.getPublications().subscribe((data: GetPublicationViewModel) => this.publications = data.publications);
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.load();
    }

}
