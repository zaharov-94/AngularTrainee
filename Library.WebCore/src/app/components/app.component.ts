import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

import { AccountService } from '../services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(private router: Router, private cookie: CookieService) {
        AccountService.userName = this.cookie.get("userName");
    }

    ngOnInit() {
    }
}
