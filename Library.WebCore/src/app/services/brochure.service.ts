import { Injectable } from '@angular/core';
import { GetBrochureViewItem } from '../models/brochureViewModel/getBrochureViewItem';
import { PostBrochureViewItem } from '../models/brochureViewModel/postBrochureViewItem';
import { GetBrochureViewModel } from '../models/brochureViewModel/getBrochureViewModel';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AccountService } from './../services/account.service';

@Injectable()
export class BrochureDataService {

    private url = "/api/brochures";

    constructor(private http: Http, private authService: AccountService) {
    }

    getBrochures(): Observable<GetBrochureViewModel> {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetBrochureViewModel>data.json() });
    }

    getBrochure(id: number): Observable<GetBrochureViewItem> {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetBrochureViewItem>data.json() });
    }
    getCoverTypes(): Observable<string[]>{
        return this.http.get("/api/covertypes", { headers: this.authService.authJsonHeaders() }).map((data) => { return <string[]>data.json() });
    }
    createBrochure(brochure: PostBrochureViewItem): Observable<Boolean> {
        return this.http.post(this.url, brochure, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    updateBrochure(brochure: PostBrochureViewItem): Observable<Boolean>  {

        return this.http.put(this.url + '/' + brochure.id, brochure, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    deleteBrochure(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
}
