import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';

import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/Rx';

import { ErrorService } from './error.service';

import { PostLoginViewModel } from '../models/postLoginViewModel';
import { PostRegisterViewModel } from '../models/postRegisterViewModel';

@Injectable()
export class AccountService extends ErrorService {
    public static isLoggedIn: boolean = false;
    public static isAdmin: boolean = null;
    public static userName: string = null;

    constructor(private http: HttpClient, private cookie: CookieService) {
        super();
    }

    public login(data: PostLoginViewModel): Observable<boolean> {
        return this.http.post('api/auth/login', data)
            .map(res => {
                AccountService.isLoggedIn = true;
                AccountService.isAdmin = <boolean>res;
                AccountService.userName = data.email;
                this.cookie.deleteAll();
                this.cookie.set("isLoggedIn", String(AccountService.isLoggedIn), 100, "path");
                this.cookie.set("isAdmin", String(AccountService.isAdmin), 100, "path");
                this.cookie.set("userName", String(AccountService.userName), 100, "path");
                return true;
            })
            .catch(this.handleError);
    }

    public register(data: PostRegisterViewModel): Observable<boolean> {
        return this.http.post('api/auth/register', data)
            .map(x => x as boolean)
            .catch(this.handleError);
    }

    public logout(): Observable<boolean> {
        this.http.get('api/auth/logout').subscribe();
        AccountService.isAdmin = null;
        AccountService.isLoggedIn = false;
        this.cookie.delete("isLoggedIn");
        this.cookie.delete("isAdmin");
        this.cookie.delete("userName");
        this.cookie.deleteAll();
        return new Observable<boolean>();
    }
}
