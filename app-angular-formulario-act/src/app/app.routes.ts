import { Routes } from '@angular/router';
import { StudentNewPage } from './pages/student-new-page/student-new-page';
import { Listado } from './pages/listado/listado';

export const routes: Routes = [

    {
        path: 'newStudent', component: StudentNewPage
    },

    {
        path:'', component: Listado
    }


];
