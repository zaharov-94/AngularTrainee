import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAuthorViewItem } from '../models/authorViewModel/getAuthorViewItem';
import { PostAuthorViewItem } from '../models/authorViewModel/postAuthorViewItem';
import { GetAuthorViewModel } from '../models/authorViewModel/getAuthorViewModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorDataService {

    private url = "/api/authors";

    constructor(private http: HttpClient) {
    }

    getAuthors(): Observable<GetAuthorViewModel> {
        return this.http.get(this.url).map((data) => { return <GetAuthorViewModel>data });
    }

    getAuthor(id: number): Observable<GetAuthorViewItem> {
        return this.http.get(this.url + '/' + id).map((data) => { return <GetAuthorViewItem>data });
    }

    createAuthor(author: PostAuthorViewItem): Observable<Boolean> {
        return this.http.post(this.url, author).map(data => data as boolean);
    }
    updateAuthor(author: PostAuthorViewItem): Observable<Boolean> {

        return this.http.put(this.url + '/' + author.id, author).map(data => data as boolean);
    }
    deleteAuthor(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id).map(data => data as boolean);
    }
}
