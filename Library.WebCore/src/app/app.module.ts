import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './components/app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavMenuComponent } from './components/navmenu/navmenu.component';

import { MagazineComponent } from './components/magazine/magazine.component';
import { MagazineDataService } from './services/magazine.service';

import { BookComponent } from './components/book/book.component';
import { BookDataService } from './services/book.service';

import { PublicationHouseComponent } from './components/publicationHouse/publicationHouse.component';
import { PublicationHouseDataService } from './services/publicationHouse.service';

import { PublicationComponent } from './components/publication/publication.component';
import { PublicationDataService } from './services/publication.service';

import { BrochureComponent } from './components/brochure/brochure.component';
import { BrochureDataService } from './services/brochure.service';

// определение маршрутов
const appRoutes: Routes = [
  { path: '', redirectTo: 'publication', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'brochure', component: BrochureComponent },
  { path: 'magazine', component: MagazineComponent },
  { path: 'publicationhouse', component: PublicationHouseComponent },
  { path: 'publication', component: PublicationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    BookComponent,
    MagazineComponent,
    PublicationHouseComponent,
    PublicationComponent,
    BrochureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule, GridModule,
    DropDownsModule
  ],
  providers: [BookDataService, MagazineDataService, PublicationHouseDataService,
      PublicationDataService, BrochureDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
