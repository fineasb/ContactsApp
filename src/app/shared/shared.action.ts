import { createAction, props } from "@ngrx/store";


export const setLoadingSpinner = createAction('[Contact Component] loading action', props<{status:boolean}>());