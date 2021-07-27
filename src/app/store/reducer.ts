import { addContact, addContactSuccess, deleteContact, loadTheContacts, searchContact, updateContact } from "./action";
import { createReducer, on } from '@ngrx/store';
import { initialState } from "./state";

const _sharedReducer = createReducer(
  initialState,
  on(loadTheContacts, (state, action) => {
    return {
      ...state
    };
  }),
  on(searchContact, (state, action) => {
    const searchedContact = state.contacts.filter( (el) => {
      return el.firstName === action.search || el.lastName === action.search || el.email === action.search;
    })
    return {
      ...state,
      contacts: searchedContact
    };
  }),
  on(addContact, (state, action) => {
    let contact = { ...action.contact };
    return {
      ...state,
      contacts: [...state.contacts, contact]
    };
  }),
  on(addContactSuccess, (state, action) => {
    let contact = { ...action.contact };
    return {
      ...state,
      contacts: [...state.contacts, contact]
    };
  }),
  on(deleteContact, (state, { id }) => {
    const updatedContacts = state.contacts.filter( (el) => {
      return el.id !== id;
    })
    return {
      ...state,
      contacts: updatedContacts
    };
  }),
  on(updateContact, (state, action) => {
    const updatedContacts = state.contacts.map((contact) => {
      return action.contact.id === contact.id ? action.contact : contact;
    });
    return {
      ...state,
      contacts: updatedContacts,
    }
  })
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
