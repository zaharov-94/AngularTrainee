import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { NavMenuComponent } from './navmenu/navmenu.component';

import { MagazineComponent } from './magazine/magazine.component';
import { MagazineDataService } from './services/magazine.service';

import { BookComponent } from './book/book.component';
import { BookDataService } from './services/book.service';

import { PublicationHouseDataService } from './services/publicationHouse.service';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'magazine', component: MagazineComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BookComponent,
    MagazineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, GridModule,
    DropDownsModule
  ],
  providers: [AppService, BookDataService, MagazineDataService, PublicationHouseDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
