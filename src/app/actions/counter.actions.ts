import { Action } from '@ngrx/store';

export enum CounterActionTypes {
  Increment = '[Counter] INCREMENT',
  Decrement = '[Counter] DECREMENT'
}

export class Increment implements Action {
  readonly type = CounterActionTypes.Increment;
  constructor(public payload: number) {}
}

export class Decrement implements Action {
  readonly type = CounterActionTypes.Decrement;
  constructor(public payload: number) {}
}

export type CounterActions =
  | Increment
  | Decrement;