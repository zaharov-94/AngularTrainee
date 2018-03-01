import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthModule } from './components/authorization/auth.module';
import { LibraryModule } from './components/library/library.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'library', pathMatch: 'full' },
    { path: 'account', component: AuthModule },
    { path: 'library', component: LibraryModule }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
