import { Injectable } from '@angular/core';
import { GetBrochureViewItem } from '../models/brochureViewModel/getBrochureViewItem';
import { PostBrochureViewItem } from '../models/brochureViewModel/postBrochureViewItem';
import { GetBrochureViewModel } from '../models/brochureViewModel/getBrochureViewModel';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BrochureDataService {

    private url = "/api/brochures";

    constructor(private http: HttpClient) {
    }

    getBrochures(): Observable<GetBrochureViewModel> {
        return this.http.get(this.url).map((data) => { return <GetBrochureViewModel>data });
    }

    getBrochure(id: number): Observable<GetBrochureViewItem> {
        return this.http.get(this.url + '/' + id).map((data) => { return <GetBrochureViewItem>data });
    }
    getCoverTypes(): Observable<string[]>{
        return this.http.get("/api/covertypes").map((data) => { return <string[]>data });
    }
    createBrochure(brochure: PostBrochureViewItem): Observable<Boolean> {
        return this.http.post(this.url, brochure).map(data => data as boolean);
    }
    updateBrochure(brochure: PostBrochureViewItem): Observable<Boolean>  {

        return this.http.put(this.url + '/' + brochure.id, brochure).map(data => data as boolean);
    }
    deleteBrochure(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
