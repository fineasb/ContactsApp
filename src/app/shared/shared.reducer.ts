import { createReducer, on } from "@ngrx/store";
import { initialState } from "../store/state";
import { setLoadingSpinner } from "./shared.action";

const _sharedReducer = createReducer(
    initialState,
    on(setLoadingSpinner, (state, action) => {
        return {
            ...state,
            showLoading: action.status,
        };
    })
);

export function SharedSpinnerReducer(state, action) {
    return _sharedReducer(state, action);
}