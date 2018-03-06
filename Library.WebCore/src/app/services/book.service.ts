import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetBookViewItem } from '../models/bookViewModel/getBookViewItem';
import { PostBookViewItem } from '../models/bookViewModel/postBookViewItem';
import { GetBookViewModel } from '../models/bookViewModel/getBookViewModel';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Http } from '@angular/http';
import { AccountService } from './../services/account.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookDataService {

    private url = "/api/books";

    constructor(private http: Http, private authService: AccountService) {
    }

    getBooks(): Observable<GetBookViewModel>{
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((books) => { return <GetBookViewModel>books.json() });
    }

    getBook(id: number): Observable<GetBookViewItem> {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetBookViewItem>data.json() });
    }

    createBook(book: PostBookViewItem): Observable<Boolean> {
        return this.http.post(this.url, book, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    updateBook(book: PostBookViewItem): Observable<Boolean> {

        return this.http.put(this.url + '/' + book.id, book, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    deleteBook(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
}
