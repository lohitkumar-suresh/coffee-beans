import { BeansState } from './beans.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const BEAN_STATE_NAME = 'beans';

const getBeansState = createFeatureSelector<BeansState>(BEAN_STATE_NAME);

export const getBeans = createSelector(getBeansState, (state) => {
  return state.beans;
});

export const getLoadingStatus = createSelector(getBeansState, (state) => {
  return state.loading;
});
