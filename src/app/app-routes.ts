import { Routes } from '@angular/router';

import { LayoutComponent } from '../app/containers/layout/layout.component';
import { LoginComponent } from '../app/containers/login/login.component';
import { HomeComponent } from '../app/containers/home/home.component';

export const routes: Routes = [{ //case if url == null
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
},
    {                            // main routes 
    path: '',
    component: LayoutComponent,
    children: [{
        path: 'login',
        component: LoginComponent
    }, {
        path: 'home',
        component: HomeComponent    
    }]
}, {                              // case if 404 (url doesn't exist)
    path: '**',
    redirectTo: 'home'
}]