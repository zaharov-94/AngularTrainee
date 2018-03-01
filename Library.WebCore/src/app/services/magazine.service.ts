import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Magazine } from '../models/magazine.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MagazineDataService {

    private url = "/api/magazines";

    constructor(private http: HttpClient) {
    }

    getMagazines(): Observable<Magazine[]> {
        return this.http.get(this.url).map((data) => { return <Magazine[]>data });
    }

    getMagazine(id: number): Observable<Magazine> {
        return this.http.get(this.url + '/' + id).map((data) => { return <Magazine>data });
    }

    createMagazine(magazine: Magazine): Observable<Boolean> {
        return this.http.post(this.url, magazine).map(data => data as boolean);
    }
    updateMagazine(magazine: Magazine): Observable<Boolean> {

        return this.http.put(this.url + '/' + magazine.id, magazine).map(data => data as boolean);
    }
    deleteMagazine(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
