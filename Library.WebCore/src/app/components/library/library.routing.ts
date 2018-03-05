import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../auth.guard';
import { RootComponent } from './root/root.component';
import { AuthorComponent } from './author/author.component';
import { BookComponent } from './book/book.component';
import { BrochureComponent } from './brochure/brochure.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PublicationComponent } from './publication/publication.component';
import { PublicationHouseComponent } from './publicationHouse/publicationHouse.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'library', component: RootComponent, canActivate: [AuthGuard],

        children: [
            { path: '', redirectTo: 'publication', pathMatch: 'full' },
            { path: 'author', component: AuthorComponent },
            { path: 'book', component: BookComponent },
            { path: 'brochure', component: BrochureComponent },
            { path: 'magazine', component: MagazineComponent },
            { path: 'publication', component: PublicationComponent },
            { path: 'publicationhouse', component: PublicationHouseComponent }
        ]
    }
]);
