import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetBookViewItem } from '../models/bookViewModel/getBookViewItem';
import { PostBookViewItem } from '../models/bookViewModel/postBookViewItem';
import { GetBookViewModel } from '../models/bookViewModel/getBookViewModel';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookDataService {

    private url = "/api/books";

    constructor(private http: HttpClient) {
    }

    getBooks(): Observable<GetBookViewModel>{
        return this.http.get(this.url).map((books) => { return <GetBookViewModel>books });
    }

    getBook(id: number): Observable<GetBookViewItem> {
        return this.http.get(this.url + '/' + id).map((data) => { return <GetBookViewItem>data });
    }

    createBook(book: PostBookViewItem): Observable<Boolean> {
        return this.http.post(this.url, book).map(data => data as boolean);
    }
    updateBook(book: PostBookViewItem): Observable<Boolean> {

        return this.http.put(this.url + '/' + book.id, book).map(data => data as boolean);
    }
    deleteBook(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
