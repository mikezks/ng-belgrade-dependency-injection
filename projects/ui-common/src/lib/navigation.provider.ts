import { InjectionToken, Provider, WritableSignal, inject, signal } from "@angular/core";


export const NAVIGATION_STATE = new InjectionToken<
  WritableSignal<string[]>
>('NAVIGATION_STATE', {
  providedIn: 'root',
  factory: () => signal([
    'home',
    'booking'
  ])
});

export function injectNavigationState() {
  return inject(NAVIGATION_STATE);
}

export function provideNavigationState(state: string[] = []): Provider {
  return [{
    provide: NAVIGATION_STATE,
    useFactory: () => signal(state)
  }];
}
