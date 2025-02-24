import { Routes } from '@angular/router';
import { NavComponent } from './project/layout/header/nav/nav.component';
import { HomeComponent } from './project/component/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: NavComponent, // ✅ Parent Component (Always Visible)
        children: [
            {
                path: '',
                component: HomeComponent // ✅ Default Page (Home)
            },
            {
                path: 'home',
                component: HomeComponent // ✅ Route for `/home`
            }
            // Add more child routes here if needed
        ]
    }
];
