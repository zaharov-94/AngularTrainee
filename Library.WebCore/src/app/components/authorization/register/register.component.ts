import { NgForm } from '@angular/forms';
import { AccountService } from './../../../services/account.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { PostRegisterViewModel } from '../../../models/accountViewModel/postRegisterViewModel';
import { Component, OnInit} from '@angular/core';

@Component({
    selector: 'register',
    styleUrls: ['./register.component.css'],
    templateUrl: './register.component.html'
})

export class RegisterComponent {
    registerViewModel: PostRegisterViewModel;
    error = '';
    show: boolean = false;

    constructor(public router: Router,
        public http: Http,
        private authService: AccountService) { }

    ngOnInit() {
        this.registerViewModel = new PostRegisterViewModel();
        this.show = true;
    }

    register(form: NgForm): void {
        if (form.valid && (this.registerViewModel.confirmPassword === this.registerViewModel.password)) {
            this.authService.registration(this.registerViewModel).subscribe(response => {
                if (response.status == 200) {
                    this.router.navigate(['/account/login'])
                }
            },
            error => {
                this.error = error._body;
            });

            form.reset();
        }
        if (this.registerViewModel.confirmPassword != this.registerViewModel.password) {
            this.error = "Form not valid";
        }
    }
}
