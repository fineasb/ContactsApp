import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactsState } from "../models/contacts.model";

const getContactsState = createFeatureSelector<ContactsState>('contacts');


export const getContacts = createSelector(getContactsState, (state) => {
    return state.contacts;
});

export const getContactById = createSelector(getContactsState, (state, props) => {
    return state.contacts[props.id] ? state.contacts[props.id] : null;

    
});

