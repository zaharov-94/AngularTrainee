import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { AccountService } from './services/account.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private accountService: AccountService, private router: Router, private activatedRoute: ActivatedRoute) { }

    canActivate() {
        if (!this.accountService.isAuthenticated()) {
            this.router.navigate(['/account/login']);
            return false;
        }
        return true;
    }
}
