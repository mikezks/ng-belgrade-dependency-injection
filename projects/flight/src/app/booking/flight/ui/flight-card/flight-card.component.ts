import { DatePipe, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input, model, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { injectCdBlink } from '../../../../shared/cd-visualizer/cd-visualizer';
import { Flight } from './../../logic/model/flight';


@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    NgStyle, DatePipe,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      class="card"
      [ngStyle]="{ 'background-color': selected() ? 'rgb(204, 197, 185)' : 'white' }"
    >
      <div class="card-header">
        <h2 class="card-title">{{ item().from }} - {{ item().to }}</h2>
      </div>

      <div class="card-body">
        <p>Flight-No.: #{{ item().id }}</p>
        <p>Flight-No.: #{{ item().date | date : "dd.MM.yyyy HH:mm" }}</p>
        <p>
          <button
            (click)="toggleSelection()"
            class="btn btn-info btn-sm"
            style="min-width: 85px; margin-right: 5px"
          >{{ selected() ? "Remove" : "Select" }}</button>
          <a
            [routerLink]="['../edit', item().id]"
            class="btn btn-success btn-sm"
            style="min-width: 85px; margin-right: 5px"
          >Edit</a>
          <button
            (click)="delay()"
            class="btn btn-danger btn-sm"
            style="min-width: 85px; margin-right: 5px"
          >Delay</button>
        </p>
      </div>
    </div>

    <!-- {{ blink() }} -->
  `
})
export class FlightCardComponent {
  blink = injectCdBlink();

  item = input.required<Flight>();
  selected = model(false);
  delayTrigger = output<Flight>();

  toggleSelection(): void {
    this.selected.update(selected => !selected);
  }

  delay(): void {
    this.delayTrigger.emit(this.item());
  }
}
