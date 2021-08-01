import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact, ContactsState } from '../models/contacts.model';
import { addContact, deleteContact, searchContact, updateContact } from '../store/action';
import { getContacts } from '../store/selector';
import { setLoadingSpinner } from '../store/spinnerStore/spinner.action';
import { Spinner } from '../store/spinnerStore/spinner.state';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private spinnerStore: Store<Spinner>,  private store: Store<ContactsState>) { }

  getContacts(){
    return this.store.select(getContacts);
  }
  
  updateContact(contact: Contact){
    this.store.dispatch(updateContact({contact}));
  }
  
}
