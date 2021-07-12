import { addContact, deleteContact, loadTheContacts } from "./action";
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

const _addContactReducer = createReducer(
    initialState,
    on(addContact, (state, action) => {
      let contact = { ...action.contact };
      
      return {
        ...state,
        contacts: [...state.contacts, contact]
      }
    })
);

const _deleteContactReducer = createReducer(
    initialState,
    on(deleteContact, (state, { id }) => {
      const updatedContacts = state.contacts.filter( (el) => {
        return el.id !== id;
      })

      return {
        ...state,
        contacts: updatedContacts
      };
    } )
);

export function ContactsReducer(state, action) {
    return _contactReducer(state, action);
  }

export function addContactReducer(state, action) {
    return _addContactReducer(state, action);
}

export function deleteContactReducer(state, action) {
    return _deleteContactReducer(state, action);
}
