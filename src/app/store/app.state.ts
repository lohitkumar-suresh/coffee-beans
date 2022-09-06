import { beansReducer } from "../beans/state/beans.reducer"
import { BeansState } from "../beans/state/beans.state"



// These can be moved to respective module for lazy loading dependencies
export interface AppState {
  beans: BeansState
}


export const appReducer = {
  beans: beansReducer
}
