import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';

import { AppComponent } from './components/app.component';
import { AuthModule } from './components/authorization/auth.module';
import { LibraryModule } from './components/library/library.module';

import { AccountService } from './services/account.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        routing,
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        JsonpModule,
        AuthModule,
        LibraryModule
    ],
    providers: [
        AccountService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
