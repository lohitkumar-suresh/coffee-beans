import { Action, createReducer, on } from "@ngrx/store";
import { loadBeansSuccess } from "./beans.actions";
import { BeansState, initialState } from "./beans.state";



const _beansReducer = createReducer(
  initialState,
  on(loadBeansSuccess, (state, action) => {
    return {
      ...state,
      beans: action.beans,
      loading: false,
      storeLoaded: true
    };
  }));

export function beansReducer(state: BeansState | undefined, action: Action) {
  return _beansReducer(state, action)
}
