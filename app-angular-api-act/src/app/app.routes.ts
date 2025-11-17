import { Routes } from '@angular/router';
import { VehiclesListPage } from './pages/vehicles-list-page/vehicles-list-page';
import { VehiclesDetailPage } from './pages/vehicles-detail-page/vehicles-detail-page';

export const routes: Routes = [

    {
        path: '',
        component: VehiclesListPage,
    },
    {
        path: 'details/:id',
        component: VehiclesDetailPage,
    }

];
