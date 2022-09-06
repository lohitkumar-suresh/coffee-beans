import { createAction, props } from "@ngrx/store";
import { CoffeeBean } from "../model/bean";

export const LOAD_BEANS = '[bean list page] load beans';
export const LOAD_BEANS_SUCCESS = '[bean list page] load beans success';

export const loadBeans = createAction(LOAD_BEANS);
export const loadBeansSuccess = createAction(
  LOAD_BEANS_SUCCESS,
  props<{ beans: CoffeeBean[] }>()
);
