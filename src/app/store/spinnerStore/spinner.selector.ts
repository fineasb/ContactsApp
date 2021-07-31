import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Spinner } from "./spinner.state";


const getspinnerState = createFeatureSelector<Spinner>('loadingSpinner');

export const getLoading = createSelector(getspinnerState, (state) => {
    return state.showLoading;
});