import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicationHouse } from '../models/publicationHouse.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PublicationHouseDataService {

    private url = "/api/publicationHouses";

    constructor(private http: HttpClient) {
    }

    getPublicationHouses(): Observable<PublicationHouse[]> {
        return this.http.get(this.url).map((data) => { return <PublicationHouse[]>data });
    }

    getPublicationHouse(id: number): Observable<PublicationHouse> {
        return this.http.get(this.url + '/' + id).map((data) => { return <PublicationHouse>data });
    }

    createPublicationHouse(publicationHouse: PublicationHouse): Observable<Boolean> {
        return this.http.post(this.url, publicationHouse).map(data => data as boolean);
    }
    updatePublicationHouse(publicationHouse: PublicationHouse): Observable<Boolean> {

        return this.http.put(this.url + '/' + publicationHouse.id, publicationHouse).map(data => data as boolean);
    }
    deletePublicationHouse(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
