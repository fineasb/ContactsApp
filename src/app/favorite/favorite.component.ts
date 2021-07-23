import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contact, ContactsState } from '../models/contacts.model';
import { getContacts } from '../store/selector';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import {updateContact } from '../store/action';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
 

  contact: Contact;
  updateContact: Contact;
  favoriteForm: FormGroup;
  spinner: boolean = false;

  contacts$: Observable<Contact[]>;
  favourites;
  contactSubscription: Subscription;

  constructor( private store: Store<ContactsState>, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.contacts$ = this.store.select(getContacts);
    this.contacts$.subscribe(el => this.favourites = el);
    this.favoriteForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [ ''],
      favourite: [ '']
    })
  }

   editContact(contactId:any){
      this.contactSubscription = this.store.pipe(select((state: any) => state.contacts.contacts.find((post)=> post.id === contactId))).subscribe((data) => {
      this.updateContact = data;
      this.createForm();
   });
  }

  createForm(){
    this.favoriteForm = this.fb.group({
      firstName: [this.updateContact.firstName, Validators.required],
      lastName: [this.updateContact.lastName, Validators.required],
      email: [this.updateContact.email, [Validators.email, Validators.required]],
      phoneNumber: [this.updateContact.phoneNo, Validators.required],
      favourite: [this.updateContact.favourite]
    })

  }

  onSave(){

    const firstName = this.favoriteForm.value.firstName;
    const lastName = this.favoriteForm.value.lastName;
    const email = this.favoriteForm.value.email;
    const phoneNo = this.favoriteForm.value.phoneNumber;
    const favourite = this.favoriteForm.value.favourite;

    const contact: Contact = {
      id: this.updateContact.id,
      firstName,
      lastName,
      email,
      phoneNo,
      favourite
    };

    this.spinner = true;

    setTimeout( () => { 
      if(!this.favoriteForm.valid){
        return;
      }
      this.store.dispatch(updateContact({ contact }));
      this.spinner = false;
      ($('#editModal') as any).modal('hide');
      this.favoriteForm.reset();
       }, 900 );
  }

}
