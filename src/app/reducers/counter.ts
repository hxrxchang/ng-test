import {CounterActions, CounterActionTypes} from './../actions/counter.actions';

const initialState: number = 0;

export function counterReducer(state = initialState, action: CounterActions) {
  switch (action.type) {
    case CounterActionTypes.Increment:
      return state + action.payload;

    case CounterActionTypes.Decrement:
      return state - action.payload;

    default:
      return state;
  }
}
