import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
    styleUrls: ['./navmenu.component.css']
})
export class NavMenuComponent implements OnInit {
    constructor(private accountService: AccountService) { }

    public userName: string;

    ngOnInit() {
        this.userName = this.accountService.getUserName();
    }
}
