import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../../services/account.service';

@Component({
    selector: 'side-menu',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarMenuComponent implements OnInit {
    constructor() { }

    public userName: string;

    ngOnInit() {
        this.userName = AccountService.userName;
    }
}
