import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, catchError, debounceTime, distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';
import { FlightService } from '../../../booking/flight/logic/data-access/flight.service';
import { Flight } from '../../../booking/flight/logic/model/flight';

@Component({
  selector: 'app-flight-typeahead',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './departure.component.html'
})
export class FlightTypeaheadComponent {
  private flightService = inject(FlightService);

  control = new FormControl('', { nonNullable: true });
  flights$ = this.initFlightsStream();
  loading = false;

  initFlightsStream(): Observable<Flight[]> {
    return this.control.valueChanges.pipe(
      filter(airport => airport.length > 2),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.loading = true),
      switchMap(airport => this.load(airport)),
      tap(() => this.loading = false)
    )
  }

  load(airport: string): Observable<Flight[]> {
    return this.flightService.find(airport, '').pipe(
      catchError(() => of([]))
    );
  }
}
