import { createAction, props } from "@ngrx/store";
import { CoffeeBean } from "../model/bean";

export const LOAD_BEANS = '[posts page] load posts';
export const LOAD_BEANS_SUCCESS = '[posts page] load posts success';

export const loadBeans = createAction(LOAD_BEANS);
export const loadBeansSuccess = createAction(
  LOAD_BEANS_SUCCESS,
  props<{ beans: CoffeeBean[] }>()
);
