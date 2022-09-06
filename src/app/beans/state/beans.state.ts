import { CoffeeBean } from "../model/bean";


export interface BeansState {
  beans: CoffeeBean[];
  loading: boolean;
}

export const initialState: BeansState = {
  beans: [],
  loading: true
};
