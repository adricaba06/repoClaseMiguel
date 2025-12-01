import { Routes } from '@angular/router';
import { MovieDiscoverPage } from './pages/movie-discover-page/movie-discover-page';
import { CreateSession } from './pages/create-session/create-session';
import { MovieListsPage } from './pages/movie-lists-page/movie-lists-page';
import { MovieListDetails } from './pages/movie-list-details/movie-list-details';

export const routes: Routes = [

    {path: '', pathMatch: 'full', component: MovieDiscoverPage},
    {path: 'create-session',component: CreateSession},
    {path: 'list', component: MovieListsPage},
    {path: 'list/:id', component: MovieListDetails}
];
