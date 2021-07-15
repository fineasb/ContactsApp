import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contact, ContactsState } from '../models/contacts.model';
import { getContacts } from '../store/selector';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { addContact, updateContact } from '../store/action';
import { deleteContact } from '../store/action';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  addForm: FormGroup;
  updateForm: FormGroup;
  contact: Contact;
  updateContact: Contact;
  spinner: boolean = false;

  contacts$: Observable<Contact[]>;
  contactSubscription: Subscription;

  constructor( private store: Store<ContactsState>, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.contacts$ = this.store.select(getContacts);

    this.addForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [ '', Validators.required],
      email: [ '', [Validators.email, Validators.required]],
      phoneNumber: [ '', Validators.required]
    })
  }

  get firstName() { return this.addForm.get('firstName'); }
  get lastName() { return this.addForm.get('lastName'); }
  get email() { return this.addForm.get('email'); }
  get phoneNumber() { return this.addForm.get('phoneNumber'); }

  deleteContact(id: number) {
    if(confirm){
      this.store.dispatch(deleteContact({ id }));
    }
  }

  addContact(){
    const contact: Contact = {
      firstName: this.addForm.value.firstName,
      lastName: this.addForm.value.lastName,
      email: this.addForm.value.email,
      phoneNo: this.addForm.value.phoneNumber
    };
    this.store.dispatch(addContact({ contact }));

    this.spinner = true;
    setTimeout( () => { 
    if(this.addForm.invalid){
      return;
    }
    ($('#addModal') as any).modal('hide');
    this.spinner = false;
    this.addForm.reset();
     }, 900 );
  }

  createForm() {
    this.updateForm = this.fb.group({
      firstName: [this.contact.firstName, [Validators.required, Validators.minLength(6)]],
      lastName: [this.contact.lastName, [Validators.required,Validators.minLength(10)]],
      email: [this.contact.email, [Validators.required,Validators.email]],
      phoneNo: [this.contact.phoneNo, [Validators.required,Validators.minLength(10)]]
    });
  }

  editContact(contactId:string){
    const id = contactId;
    this.store.select(getContactById, { id }).subscribe((data) => {
      this.updateContact = data;
      console.log(this.updateContact);
    });
  }

  // updateContact(){
  //   if(!this.addForm.invalid){
  //     return;
  //   }
    
  //   const firstName = this.addForm.value.firstName;
  //   const lastName = this.addForm.value.lastName;
  //   const email = this.addForm.value.email;
  //   const phoneNo = this.addForm.value.phoneNo;
    
  //   const contact: Contact = {
  //     id: this.contact.id,
  //     firstName,
  //     lastName,
  //     email,
  //     phoneNo
  //   };

  //   this.store.dispatch(updateContact({ contact }));  
  // }




}
