import { Directive, effect, input } from "@angular/core";
import { injectNavigationState, provideNavigationState } from "./navigation.provider";

@Directive({
  selector: '[navItems]',
  standalone: true,
  providers: [
    provideNavigationState(['test'])
  ]
})
export class NavigationProviderDirective {
  navState = injectNavigationState();
  navItems = input.required<string[]>();

  constructor() {
    effect(() => this.navState.set(
      this.navItems()
    ), { allowSignalWrites: true });
  }
}
