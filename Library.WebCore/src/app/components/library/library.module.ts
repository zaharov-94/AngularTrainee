import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid'
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { getDate, addDays } from '@progress/kendo-date-math';

import { routing } from './library.routing';

import { RootComponent } from './root/root.component';
import { SidebarMenuComponent } from '../navigation/sidebar/sidebar.component';
import { NavMenuComponent } from '../navigation/navmenu/navmenu.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { BrochureComponent } from './brochure/brochure.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationHouseComponent } from './publicationHouse/publicationHouse.component';

import { AuthorDataService } from '../../services/author.service';
import { BookDataService } from '../../services/book.service';
import { BrochureDataService } from '../../services/brochure.service';
import { MagazineDataService } from '../../services/magazine.service';
import { PublicationDataService } from '../../services/publication.service';
import { PublicationHouseDataService } from '../../services/publicationHouse.service';
import { AccountService } from '../../services/account.service';

import { AuthGuard } from '../../auth.guard';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        routing,
        GridModule,
        DropDownsModule,
        DropDownListModule,
        DateInputsModule
    ],
    declarations: [
        RootComponent,
        SidebarMenuComponent,
        NavMenuComponent,
        AuthorComponent,
        BookComponent,
        BrochureComponent,
        MagazineComponent,
        PublicationComponent,
        PublicationHouseComponent
    ],
    exports: [],
    providers: [
        AuthGuard,
        AuthorDataService,
        BookDataService,
        BrochureDataService,
        MagazineDataService,
        PublicationDataService,
        PublicationHouseDataService,
        AccountService
    ]
})
export class LibraryModule { }
