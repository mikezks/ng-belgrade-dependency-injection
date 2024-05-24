import { Routes } from '@angular/router';
import { HomeComponent } from './core';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking')
  },
  {
    path: 'checkin',
    redirectTo: 'booking/passenger',
    pathMatch: 'full'
  },
  {
    path: 'boarding',
    loadChildren: () => import('./boarding')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
