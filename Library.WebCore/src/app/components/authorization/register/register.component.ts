import { NgForm } from '@angular/forms';
import { AccountService } from './../../../services/account.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { PostRegisterViewModel } from '../../../models/postRegisterViewModel';
import { Component, OnInit, ViewChild, ViewContainerRef, trigger, state, style, transition, animate } from '@angular/core';
import { ToastrService } from 'ngx-toastr';   
//import { NotificationService } from './../../../services/notification.service';

@Component({
    selector: 'register',
    styleUrls: ['./register.component.css'],
    templateUrl: './register.component.html',
    animations: [
        trigger('easeInOut', [
            transition(':enter', [
                style({
                    opacity: 0
                }),
                animate("1s ease-in-out", style({
                    opacity: 1
                }))
            ]),
            transition(':leave', [
                style({
                    opacity: 1
                }),
                animate("1s ease-in-out", style({
                    opacity: 0
                }))
            ])
        ])
    ]
})

export class RegisterComponent {
    registerViewModel: PostRegisterViewModel;
    error = '';
    show: boolean = false;

    constructor(public router: Router,
        public http: Http,
        private authService: AccountService,
        private toastr: ToastrService
       /* private notificationService: NotificationService*/) { }

    ngOnInit() {
        this.registerViewModel = new PostRegisterViewModel();
        this.show = true;
    }

    register(form: NgForm): void {
        let body = {
            'name': this.registerViewModel.name,
            'email': this.registerViewModel.email,
            'password': this.registerViewModel.password,
            'confirmPassword': this.registerViewModel.confirmPassword
        };
        this.http.post('/api/account/register', JSON.stringify(body), { headers: this.authService.jsonHeaders() })
            .subscribe(response => {
                if (response.status == 200) {
                    this.router.navigate(['/account/login'])
                    this.toastr.info("Created Successfully", "User register");
                }
            },
            error => {
                this.error = error._body;
            });

        form.reset();
    }
}
