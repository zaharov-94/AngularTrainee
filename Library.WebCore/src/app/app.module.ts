import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookListComponent } from './book/list/book-list.component';
import { BookFormComponent } from './book/form/book-form.component';
import { BookCreateComponent } from './book/create/book-create.component';
import { BookEditComponent } from './book/edit/book-edit.component';
import { BookDataService } from './book/data.service';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { KendoComponent } from './kendo/kendo.component';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookListComponent },
  { path: 'book/create', component: BookCreateComponent },
  { path: 'book/edit/:id', component: BookEditComponent },
  { path: 'kendo', component: KendoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BookListComponent,
    BookCreateComponent,
    BookEditComponent,
    BookFormComponent,
    KendoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, GridModule
  ],
  providers: [AppService, BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
