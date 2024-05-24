import { NavigationProviderDirective } from './../../../../../../../ui-common/src/lib/navigation-provider.directive';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiNavigationMenu, provideNavigationState } from '@flight-demo/ui-common';


@Component({
  selector: 'app-flight-booking',
  standalone: true,
  imports: [
    RouterOutlet, RouterLink,
    UiNavigationMenu,
    NavigationProviderDirective
  ],
  providers: [
    provideNavigationState(['luggage'])
  ],
  template: `
    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class FlightBookingComponent {}
