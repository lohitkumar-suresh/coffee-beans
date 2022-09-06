import { createAction, props } from "@ngrx/store";
import { CoffeeBean } from "../model/bean";

export const LOAD_BEANS = '[bean list page] load posts';
export const LOAD_BEANS_SUCCESS = '[bean list page] load posts success';

export const loadBeans = createAction(LOAD_BEANS);
export const loadBeansSuccess = createAction(
  LOAD_BEANS_SUCCESS,
  props<{ beans: CoffeeBean[] }>()
);
