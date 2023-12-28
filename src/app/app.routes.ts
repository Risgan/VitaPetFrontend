import { Routes } from '@angular/router';
import { LoginComponent } from './website/pages/login/login.component';
import { MasterPageComponent } from './website/pages/master-page/master-page.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { HistorialComponent } from './website/pages/historial/historial.component';

export const routes: Routes = [
    { 
        path: 'login', component: LoginComponent 
    },
    { 
        path: '', component: MasterPageComponent, children:[
            {
                path: 'historial', component: HistorialComponent
            }
        ]
    },
    { 
        path: '**', component: NotFoundComponent
    }
];
