import { inject } from "@angular/core"
import { Store } from "@ngrx/store"
import { ticketActions } from "./actions";
import { ticketFeature } from "./reducer";
import { FlightFilter } from "../logic/model/flight-filter";
import { Flight } from "../logic/model/flight";


export function injectTicketsFacade() {
  const store = inject(Store);

  return {
    flights: store.selectSignal(ticketFeature.selectFlights),
    search: (filter: FlightFilter) =>
      store.dispatch(ticketActions.flightsLoad(filter)),
    update: (flight: Flight) =>
      store.dispatch(ticketActions.flightUpdate({ flight })),
    reset: () =>
      store.dispatch(ticketActions.flightsClear())
  };
}
