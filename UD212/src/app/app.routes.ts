import { Routes } from '@angular/router';
import { MovieDiscoverPage } from './pages/movie-discover-page/movie-discover-page';
import { FilteredMoviesPage } from './pages/filtered-movies-page/filtered-movies-page';
import { MovieDetailPage } from './pages/movie-detail-page/movie-detail-page';
import { PeopleListPage } from './pages/people-list-page/people-list-page';
import { PeopleDetail } from './pages/people-detail/people-detail';

export const routes: Routes = [
    
    {
        path: '',
        component: MovieDiscoverPage,
    },
    
    {
        path: 'search',
        component: MovieDiscoverPage,
    },

    {
        path: 'filterMovie',
        component: FilteredMoviesPage
    },

    {
        path: 'Movie/:id',
        component: MovieDetailPage,
    },

    {
        path:'people',
        component: PeopleListPage,
    },

    {
        path: 'people/:id',
        component: PeopleDetail,
    }
];
