import { createAction, props } from '@ngrx/store';
import { Contact } from '../models/contacts.model';

export const loadTheContacts = createAction('[Contact Component] load the contacts');

export const searchContact = createAction('[Contact Component] search contact ', props<{ search:string}>());

export const addContact = createAction('[Contact Component] add contact ', props<{ contact: Contact}>());
export const addContactSuccess = createAction('[Contact Component] add contact success ', props<{ contact: Contact}>());

export const deleteContact = createAction('[Contact Component] delete contact ', props<{ id: number }>());

export const updateContact = createAction('[Contact Component] update contact ', props<{ contact: Contact }>());
