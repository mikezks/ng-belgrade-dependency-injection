import { InjectionToken, WritableSignal, signal } from "@angular/core";
import { ConfigState } from "./config.model";

export const CONFIG_STATE = new InjectionToken<
  WritableSignal<ConfigState>
>('CONFIG_STATE');
