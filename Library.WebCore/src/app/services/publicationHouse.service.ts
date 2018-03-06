import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPublicationHouseViewItem } from '../models/publicationHouseViewModel/getPublicationHouseViewItem';
import { PostPublicationHouseViewItem } from '../models/publicationHouseViewModel/postPublicationHouseViewItem';
import { GetPublicationHouseViewModel } from '../models/publicationHouseViewModel/getPublicationHouseViewModel';
import { PostPublicationHouseViewModel } from '../models/publicationHouseViewModel/postPublicationHouseViewModel';
import { Observable } from 'rxjs/Observable';
import { AccountService } from './../services/account.service';
import { Http } from '@angular/http';

@Injectable()
export class PublicationHouseDataService {

    private url = "/api/publicationHouses";

    constructor(private http: Http, private authService: AccountService) {
    }

    getPublicationHouses(): Observable<GetPublicationHouseViewModel> {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetPublicationHouseViewModel>data.json() });
    }

    getPublicationHouse(id: number): Observable<GetPublicationHouseViewItem> {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetPublicationHouseViewItem>data.json() });
    }

    createPublicationHouse(publicationHouse: PostPublicationHouseViewModel): Observable<Boolean> {
        return this.http.post(this.url, publicationHouse, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    updatePublicationHouse(publicationHouse: PostPublicationHouseViewModel): Observable<Boolean> {

        return this.http.put(this.url + '/' + publicationHouse.postPublicationHouseViewItem.id, publicationHouse, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    deletePublicationHouse(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
}
