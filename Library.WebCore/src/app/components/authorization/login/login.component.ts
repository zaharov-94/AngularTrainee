import { AccountService } from './../../../services/account.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Http } from '@angular/http';
import { PostLoginViewModel } from './../../../models/postLoginViewModel';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    loginViewModel: PostLoginViewModel;
    error = '';

    constructor(public router: Router,
        public http: Http,
        private titleService: Title,
        private authService: AccountService) { }

    ngOnInit() {
        this.loginViewModel = new PostLoginViewModel();
    }

    // post the user's login details to server, if authenticated token is returned, then token is saved to session storage
    login(event: Event): void {
        event.preventDefault();
        let body = 'username=' + this.loginViewModel.email + '&password=' + this.loginViewModel.password + '&grant_type=password';

        this.http.post('http://localhost:59515/connect/token', body, { headers: this.authService.contentHeaders() })
            .subscribe(response => {
                // success, save the token to session storage
                this.authService.login(response.json());
                this.router.navigate(['']);
                this.titleService.setTitle('Home');
            },
            error => {
                this.error = 'Username or password is incorrect';
            }
            );
    }
}
