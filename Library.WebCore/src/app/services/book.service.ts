import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
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

    getBooks() {
      return this.http.get(this.url);
    }

    getBook(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createBook(book: Book) {
        return this.http.post(this.url, book);
    }
    updateBook(book: Book) {

        return this.http.put(this.url + '/' + book.id, book);
    }
    deleteBook(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}
