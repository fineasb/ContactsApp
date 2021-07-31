import { createAction, props } from "@ngrx/store";

export const setLoadingSpinner = createAction('[contactComponent] loading spinner', props<{ status: boolean}>());