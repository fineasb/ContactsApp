import { addContact, deleteContact, loadTheContacts } from "./action";
import { createReducer, on } from '@ngrx/store';
import { initialState } from "./state";

// const _contactReducer = createReducer(
//     initialState,
//     on(loadTheContacts, (state, action) => {
//         return {
//           ...state
//         };
//       })
// );

// const _addContactReducer = createReducer(
//     initialState,
//     on(addContact, (state, action) => {
//       let contact = { ...action.contact };
      
//       return {
//         ...state,
//         contacts: [...state.contacts, contact]
//       }
//     })
// );

// const _deleteContactReducer = createReducer(
//     initialState,
//     on(deleteContact, (state, { id }) => {
//       const updatedContacts = state.contacts.filter( (el) => {
//         return el.id !== id;
//       })

//       return {
//         ...state,
//         contacts: updatedContacts
//       };
//     })
// );

const _sharedReducer = createReducer(
  initialState,
  on(loadTheContacts, (state, action) => {
    return {
      ...state
    };
  }),
  on(addContact, (state, action) => {
    let contact = { ...action.contact };
    
    return {
      ...state,
      contacts: [...state.contacts, contact]
    }
  }),
  on(deleteContact, (state, { id }) => {
    const updatedContacts = state.contacts.filter( (el) => {
      return el.id !== id;
    })

    return {
      ...state,
      contacts: updatedContacts
    };
  })
);

export function sharedReducer(state, action) {
  return _sharedReducer(state, action);
}
