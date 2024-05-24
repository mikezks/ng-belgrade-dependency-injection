import { Routes } from "@angular/router";
import { FlightTypeaheadComponent } from "../../boarding/features/departure/departure.component";
import { FlightBookingComponent } from "./features/flight-booking/flight-booking.component";
import { FlightEditComponent } from "./features/flight-edit/flight-edit.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { flightsResolverConfig } from "./logic/data-access/flight.resolver";
import { provideEffects } from "@ngrx/effects";
import { TicketEffects } from "./+state/effects";
import { provideState } from "@ngrx/store";
import { ticketFeature } from "./+state/reducer";


export const FLIGHT_ROUTES: Routes = [
  {
    path: '',
    component: FlightBookingComponent,
    providers: [
      provideState(ticketFeature),
      provideEffects([TicketEffects]),
    ],
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        component: FlightSearchComponent,
      },
      {
        path: 'edit/:id',
        component: FlightEditComponent,
        resolve: flightsResolverConfig
      },
      {
        path: 'typeahead',
        component: FlightTypeaheadComponent,
      },
    ]
  }
];

export default FLIGHT_ROUTES;
