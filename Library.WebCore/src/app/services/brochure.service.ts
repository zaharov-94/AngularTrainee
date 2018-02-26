import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Brochure } from '../models/brochure.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrochureDataService {

    private url = "/api/brochures";

    constructor(private http: HttpClient) {
    }

    getBrochures() {
      return this.http.get(this.url);
    }

    getBrochure(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createBrochure(brochure: Brochure) {
        return this.http.post(this.url, brochure);
    }
    updateBrochure(brochure: Brochure) {

        return this.http.put(this.url + '/' + brochure.id, brochure);
    }
    deleteBrochure(id: number) {
      return this.http.delete(this.url + '/' + id);
    }
}
