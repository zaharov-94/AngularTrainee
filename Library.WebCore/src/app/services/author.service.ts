import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAuthorViewItem } from '../models/authorViewModel/getAuthorViewItem';
import { PostAuthorViewItem } from '../models/authorViewModel/postAuthorViewItem';
import { GetAuthorViewModel } from '../models/authorViewModel/getAuthorViewModel';
import { PostAuthorViewModel } from '../models/authorViewModel/postAuthorViewModel';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { AccountService } from './../services/account.service';

@Injectable()
export class AuthorDataService {

    private url = "/api/authors";

    constructor(private http: Http, private authService: AccountService) {
    }

    getAuthors(): Observable<GetAuthorViewModel> {
        return this.http.get(this.url, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetAuthorViewModel>data.json() });
    }

    getAuthor(id: number): Observable<GetAuthorViewItem> {
        return this.http.get(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map((data) => { return <GetAuthorViewItem>data.json() });
    }

    createAuthor(author: PostAuthorViewModel): Observable<Boolean> {
        return this.http.post(this.url, author, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    updateAuthor(author: PostAuthorViewModel): Observable<Boolean> {

        return this.http.put(this.url + '/' + author.postAuthorViewItem.id, author, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
    deleteAuthor(id: number): Observable<Boolean> {
        return this.http.delete(this.url + '/' + id, { headers: this.authService.authJsonHeaders() }).map(data => data.json() as boolean);
    }
}
