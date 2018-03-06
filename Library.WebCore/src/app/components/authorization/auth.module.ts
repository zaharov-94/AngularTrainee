import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AccountService } from '../../services/account.service';
import { routing } from './account.routing';
import { RootComponent } from './root/root.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing
    ],
    declarations: [
        RootComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [
        AccountService,
        {
            provide: AuthHttp,
            useFactory: authHttpServiceFactory,
            deps: [Http, RequestOptions]
        }
    ]
})
export class AuthModule { }
