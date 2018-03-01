import { Injectable } from '@angular/core';
import { Brochure } from '../models/brochure.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrochureDataService {

    private url = "/api/brochures";

    constructor(private http: HttpClient) {
    }

    getBrochures(): Observable<Brochure[]> {
        return this.http.get(this.url).map((data) => { return <Brochure[]>data });
    }

    getBrochure(id: number): Observable<Brochure> {
        return this.http.get(this.url + '/' + id).map((data) => { return <Brochure>data });
    }
    getCoverTypes(): Observable<string[]>{
        return this.http.get("/api/covertypes").map((data) => { return <string[]>data });
    }
    createBrochure(brochure: Brochure): Observable<Boolean> {
        return this.http.post(this.url, brochure).map(data => data as boolean);
    }
    updateBrochure(brochure: Brochure): Observable<Boolean>  {

        return this.http.put(this.url + '/' + brochure.id, brochure).map(data => data as boolean);
    }
    deleteBrochure(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
