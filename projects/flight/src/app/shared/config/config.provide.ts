import { APP_INITIALIZER, EnvironmentProviders, Signal, computed, inject, makeEnvironmentProviders, signal } from "@angular/core";
import { CONFIG_STATE } from "./config.state";
import { ConfigState, UserInfo, initialConfigState } from "./config.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";


export function provideConfig(configUrl: string): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: CONFIG_STATE,
      useValue: signal(initialConfigState)
    },
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (
        configState = inject(CONFIG_STATE),
        http = inject(HttpClient)
      ) => () =>
        http.get<ConfigState>(configUrl).pipe(
          tap(config => configState.set(config))
        )
    }
  ]);
};

export function injectConfigState(): Signal<ConfigState> {
  return inject(CONFIG_STATE).asReadonly();
}

export function injectUserFullname(): Signal<string> {
  const configState = injectConfigState();

  return computed(() => [
    configState().userInfo.firstname,
    configState().userInfo.lastname
  ].join(' '));
}
