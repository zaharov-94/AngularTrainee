import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetPublicationViewModel } from '../models/publicationViewModel/getPublicationViewModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PublicationDataService {

    private url = "/api/publications";

    constructor(private http: HttpClient) {
    }

    getPublications(): Observable<GetPublicationViewModel> {
        return this.http.get(this.url).map((data) => { return <GetPublicationViewModel>data });
    }
}
