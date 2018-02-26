import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Publication } from '../models/publication.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PublicationDataService {

    private url = "/api/publications";

    constructor(private http: HttpClient) {
    }

    getPublications() {
      return this.http.get(this.url);
    }
}
