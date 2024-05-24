import { Routes } from '@angular/router';
import { FlightTypeaheadComponent } from './features/departure/departure.component';

export const BOARDING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'departures',
        pathMatch: 'full'
      },
      {
        path: 'departures',
        component: FlightTypeaheadComponent
      }
    ]
  }
];

export default BOARDING_ROUTES;
