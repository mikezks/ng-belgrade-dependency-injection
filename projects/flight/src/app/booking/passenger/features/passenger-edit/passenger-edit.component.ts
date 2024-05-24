import { NgIf } from '@angular/common';
import { Component, effect, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { validatePassengerStatus } from '../../util/validation/passenger-status.validator';
import { switchMap } from 'rxjs';
import { PassengerService } from '../../logic/data-access/passenger.service';
import { initialPassenger } from '../../logic/model/passenger';


@Component({
  selector: 'app-passenger-edit',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './passenger-edit.component.html'
})
export class PassengerEditComponent {
  passengerService = inject(PassengerService);

  id = input(0);

  passenger = toSignal(
    toObservable(this.id).pipe(
      switchMap(id => this.passengerService.findById(id))
    ),
    { initialValue: initialPassenger }
  );

  protected editForm = inject(NonNullableFormBuilder).group({
    id: [0],
    firstName: [''],
    name: [''],
    bonusMiles: [0],
    passengerStatus: ['', [
      validatePassengerStatus(['A', 'B', 'C'])
    ]]
  });

  constructor() {
    effect(
      () => this.editForm.patchValue(this.passenger())
    );
  }

  protected save(): void {
    console.log(this.editForm.value);
  }
}
