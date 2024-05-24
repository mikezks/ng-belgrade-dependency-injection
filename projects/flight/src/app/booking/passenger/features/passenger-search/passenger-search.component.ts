import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PassengerService } from '../../logic/data-access/passenger.service';
import { Passenger, initialPassenger } from '../../logic/model/passenger';
import { injectPassengerStore, passengerActions } from '../../+state/passenger.signal.store';


@Component({
  selector: 'app-passenger-search',
  standalone: true,
  imports: [
    NgFor, NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './passenger-search.component.html'
})
export class PassengerSearchComponent {
  private store = injectPassengerStore();

  firstname = '';
  lastname = 'Smith';
  passengers = this.store.passengerEntities;
  selectedPassenger?: Passenger;

  search(): void {
    if (!(this.firstname || this.lastname)) return;

    this.store.dispatch(
      passengerActions.passengersLoad({
        firstName: this.firstname,
        name: this.lastname
      })
    );
  }

  select(passenger: Passenger): void {
    this.selectedPassenger = this.selectedPassenger === passenger ? undefined : passenger;
  }
}
