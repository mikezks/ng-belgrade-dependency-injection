import { Component, effect } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { injectNavigationState } from './navigation.provider';
import { NgClass } from '@angular/common';

@Component({
  selector: 'ui-navigation-menu',
  standalone: true,
  imports: [
    NgClass,
    RouterLink, RouterLinkActive
  ],
  template: `
    <ul class="nav">
      @for (nav of navItems(); track nav) {
        <li routerLinkActive="active">
          <a [routerLink]="'/' + nav">
            <i [ngClass]="'icon ' + 'icon-' + nav"></i>
            <p>{{ nav }}</p>
          </a>
        </li>
      }
    </ul>
  `
})
export class UiNavigationMenu {
  navItems = injectNavigationState();
}
