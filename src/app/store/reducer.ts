import { loadTheContacts } from "./action";
import { createReducer, on } from '@ngrx/store';
import { initialState } from "./state";

const _contactReducer = createReducer(
    initialState,
    on(loadTheContacts, (state, action) => {
        return {
          ...state
        };
      })
);

export function ContactsReducer(state, action) {
    return _contactReducer(state, action);
  }
