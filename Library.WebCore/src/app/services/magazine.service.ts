import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GetMagazineViewItem } from '../models/magazineViewModel/getMagazineViewItem';
import { PostMagazineViewItem } from '../models/magazineViewModel/postMagazineViewItem';
import { GetMagazineViewModel } from '../models/magazineViewModel/getMagazineViewModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './../services/account.service';

@Injectable()
export class MagazineDataService {

    private url = "/api/magazines";

    constructor(private http: Http, private authService: AccountService) {
    }

    getMagazines(): Observable<GetMagazineViewModel> {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() })
            .map((data) => { return <GetMagazineViewModel>data.json() });
    }

    getMagazine(id: number): Observable<GetMagazineViewItem> {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetMagazineViewItem>data.json() });
    }

    createMagazine(magazine: PostMagazineViewItem): Observable<Boolean> {
        return this.http.post(this.url, magazine, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    updateMagazine(magazine: PostMagazineViewItem): Observable<Boolean> {

        return this.http.put(this.url + '/' + magazine.id, magazine, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    deleteMagazine(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
}
