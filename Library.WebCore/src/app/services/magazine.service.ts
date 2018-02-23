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

    getMagazines() {
      return this.http.get(this.url);
    }

    getMagazine(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createMagazine(magazine: Magazine) {
        return this.http.post(this.url, magazine);
    }
    updateMagazine(magazine: Magazine) {

      return this.http.put(this.url + '/' + magazine.id, magazine);
    }
    deleteMagazine(id: number) {
      return this.http.delete(this.url + '/' + id);
    }
}
