import { AsyncPipe, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UiNavigationMenu } from '@flight-demo/ui-common';


@Component({
  selector: 'app-sidebar-cmp',
  standalone: true,
  imports: [
    UiNavigationMenu
  ],
  template: `
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="http://angulararchitects.io" class="simple-text logo-mini">
          <div class="logo-image-small">
            <img src="assets/paper-design/angular_gradient.png" alt="Angular Logo" />
          </div>
        </a>
        <a href="http://angulararchitects.io" class="simple-text logo-normal">
          Flights 42
        </a>
      </div>

      <ui-navigation-menu />

    </div>
  `
})
export class SidebarComponent {
  protected navItems = signal([
    'home',
    'booking',
    'checkin',
    // 'luggage',
    'boarding'
  ]);
}
