import { createReducer, on } from "@ngrx/store";
import { initialState } from "../spinnerStore/spinner.state";
import { setLoadingSpinner } from "./spinner.action";


const _sharedSpinnerReducer = createReducer(
    initialState,
    on( setLoadingSpinner, (state, action) =>{
        return {
            ...state,
            showLoading: action.status
        }
    })
);

export function sharedSpinnerReducer(state, action){
        return _sharedSpinnerReducer(state,action);
}