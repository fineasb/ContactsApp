import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactsState } from "../models/contacts.model";

const getContactsState = createFeatureSelector<ContactsState>('contacts');


export const getContacts = createSelector(getContactsState, (state) => {
    return state.contacts;
});

