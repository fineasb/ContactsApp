import { createAction, props } from '@ngrx/store';
import { Contact } from '../models/contacts.model';

export const loadTheContacts = createAction('[Contact Component] load the contacts');

export const addContact = createAction('[Contact Component] add contact ', props<{ contact: Contact}>());

export const deleteContact = createAction('[Contact Component] delete contact ', props<{ id: string }>());

