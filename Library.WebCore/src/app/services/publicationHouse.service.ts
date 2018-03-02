import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPublicationHouseViewItem } from '../models/publicationHouseViewModel/getPublicationHouseViewItem';
import { PostPublicationHouseViewItem } from '../models/publicationHouseViewModel/postPublicationHouseViewItem';
import { GetPublicationHouseViewModel } from '../models/publicationHouseViewModel/getPublicationHouseViewModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublicationHouseDataService {

    private url = "/api/publicationHouses";

    constructor(private http: HttpClient) {
    }

    getPublicationHouses(): Observable<GetPublicationHouseViewModel> {
        return this.http.get(this.url).map((data) => { return <GetPublicationHouseViewModel>data });
    }

    getPublicationHouse(id: number): Observable<GetPublicationHouseViewItem> {
        return this.http.get(this.url + '/' + id).map((data) => { return <GetPublicationHouseViewItem>data });
    }

    createPublicationHouse(publicationHouse: PostPublicationHouseViewItem): Observable<Boolean> {
        return this.http.post(this.url, publicationHouse).map(data => data as boolean);
    }
    updatePublicationHouse(publicationHouse: PostPublicationHouseViewItem): Observable<Boolean> {

        return this.http.put(this.url + '/' + publicationHouse.id, publicationHouse).map(data => data as boolean);
    }
    deletePublicationHouse(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
