import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetMagazineViewItem } from '../models/magazineViewModel/getMagazineViewItem';
import { PostMagazineViewItem } from '../models/magazineViewModel/postMagazineViewItem';
import { GetMagazineViewModel } from '../models/magazineViewModel/getMagazineViewModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MagazineDataService {

    private url = "/api/magazines";

    constructor(private http: HttpClient) {
    }

    getMagazines(): Observable<GetMagazineViewModel> {
        return this.http.get(this.url).map((data) => { return <GetMagazineViewModel>data });
    }

    getMagazine(id: number): Observable<GetMagazineViewItem> {
        return this.http.get(this.url + '/' + id).map((data) => { return <GetMagazineViewItem>data });
    }

    createMagazine(magazine: PostMagazineViewItem): Observable<Boolean> {
        return this.http.post(this.url, magazine).map(data => data as boolean);
    }
    updateMagazine(magazine: PostMagazineViewItem): Observable<Boolean> {

        return this.http.put(this.url + '/' + magazine.id, magazine).map(data => data as boolean);
    }
    deleteMagazine(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
