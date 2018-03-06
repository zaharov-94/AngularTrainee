import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetPublicationViewModel } from '../models/publicationViewModel/getPublicationViewModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './../services/account.service';

@Injectable()
export class PublicationDataService {

    private url = "/api/publications";

    constructor(private http: Http, private authService: AccountService) {
    }

    getPublications(): Observable<GetPublicationViewModel> {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetPublicationViewModel>data.json() });
    }
}
