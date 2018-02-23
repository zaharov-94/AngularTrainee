import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PublicationHouse } from '../models/publicationHouse.model';

@Injectable()
export class PublicationHouseDataService {

    private url = "/api/publicationHouses";

    constructor(private http: HttpClient) {
    }

    getPublicationHouses() {
        return this.http.get(this.url);
    }

    getPublicationHouse(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createPublicationHouse(publicationHouse: PublicationHouse) {
      return this.http.post(this.url, publicationHouse);
    }
    updatePublicationHouse(publicationHouse: PublicationHouse) {

      return this.http.put(this.url + '/' + publicationHouse.id, publicationHouse);
    }
    deletePublicationHouse(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
