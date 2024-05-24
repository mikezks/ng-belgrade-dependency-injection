import { createReduxState, mapAction, reduxMethod, withActionMappers } from '@angular-architects/ngrx-toolkit';
import { inject } from '@angular/core';
import { patchState, signalStore, type, withMethods } from '@ngrx/signals';
import { setAllEntities, withEntities } from '@ngrx/signals/entities';
import { createActionGroup, props } from '@ngrx/store';
import { map, pipe, switchMap, tap } from 'rxjs';
import { PassengerService } from '../logic/data-access/passenger.service';
import { Passenger } from './../logic/model/passenger';


const PassengerStore = signalStore(
  { providedIn: 'root' },
  // State
  withEntities({ entity: type<Passenger>(), collection: 'passenger' }),
  // Updater
  withMethods(store => ({
    setPassengers: (state: { passengers: Passenger[] }) => patchState(store,
      setAllEntities(state.passengers, { collection: 'passenger' })),
  })),
  // Effects
  withMethods((
    store,
    passengerService = inject(PassengerService)
  ) => ({
    loadPassengers: reduxMethod<{
      firstName: string,
      name: string
    }, {
      passengers: Passenger[]
    }>(pipe(
      tap(console.log),
      switchMap(filter => passengerService.find(
        filter.firstName, filter.name
      )),
      map(passengers => ({passengers}))
    ), store.setPassengers)
  })),
);

export const passengerActions = createActionGroup({
  source: 'passenger',
  events: {
    'passengers load': props<{
      firstName: string,
      name: string
    }>(),
    'passengers loaded': props<{ passengers: Passenger[] }>()
  }
});

export const { providePassengerStore, injectPassengerStore } =
  createReduxState('passenger', PassengerStore, store => withActionMappers(
    mapAction(
      passengerActions.passengersLoad,
      store.loadPassengers,
      passengerActions.passengersLoaded
    ),
    mapAction(passengerActions.passengersLoaded, store.setPassengers)
  )
);
