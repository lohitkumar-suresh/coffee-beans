import { beansReducer } from "../state/beans.reducer"
import { BeansState } from "../state/beans.state"



// These can be moved to respective module for lazy loading dependencies
export interface AppState {
  beans: BeansState
}


export const appReducer = {
  beans: beansReducer
}
