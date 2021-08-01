import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Contact, ContactsState } from '../models/contacts.model';
import { addContact, deleteContact, searchContact, updateContact } from '../store/action';
import { getContacts } from '../store/selector';
import { setLoadingSpinner } from '../store/spinnerStore/spinner.action';
import { getLoading } from '../store/spinnerStore/spinner.selector';
import { Spinner } from '../store/spinnerStore/spinner.state';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private spinnerStore: Store<Spinner>,  private store: Store<ContactsState>) { }

  getContacts(){
    return this.store.select(getContacts);
  }

  getLoading(){
    return this.store.select(getLoading);
  }

  spinnerTrue(){
    this.spinnerStore.dispatch(setLoadingSpinner({status: true}));
  }

  spinnerFalse(){
    this.spinnerStore.dispatch(setLoadingSpinner({status: false}));
  }

  deleteContact(id:number){
    this.store.dispatch(deleteContact({id}));
  }

  searchContact(search:string){
    this.store.dispatch(searchContact({search}));
  }

  addContact(contact:Contact){
    this.store.dispatch(addContact({contact}));
  }

  updateContact(contact: Contact){
    this.store.dispatch(updateContact({contact}));
  }

}
