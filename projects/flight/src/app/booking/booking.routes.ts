import { Routes } from "@angular/router";


export const BOOKING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'flight',
        pathMatch: 'full'
      },
      {
        path: 'flight',
        loadChildren: () => import('./flight')
      },
      {
        path: 'passenger',
        loadChildren: () => import('./passenger')
      }
    ]
  }
];

export default BOOKING_ROUTES;
