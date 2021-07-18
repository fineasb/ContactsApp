import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contact, ContactsState } from '../models/contacts.model';
import { getContacts } from '../store/selector';
import { pipe } from 'rxjs';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { addContact, updateContact } from '../store/action';
import { deleteContact } from '../store/action';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit , OnDestroy {
  addForm: FormGroup;
  updateForm: FormGroup;
  contact: Contact;
  updateContact: Contact;
  spinner: boolean = false;

  contacts$: Observable<Contact[]>;
  best$: Observable<Contact[]>;
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

    this.updateForm = this.fb.group({
      firstName1: ['', Validators.required],
      lastName1: [ '', Validators.required],
      email1: [ '', [Validators.email, Validators.required]],
      phoneNumber1: [ '', Validators.required]
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
  
  editContact(contactId:any){
     this.contactSubscription = this.store.pipe(select((state: any) => state.contacts.contacts.find((post)=> post.id === contactId))).subscribe((data) => {
      this.updateContact = data;
      console.log(this.updateContact.firstName);
      this.createForm();
   });
  }

  createForm() {

    this.updateForm = this.fb.group({
        firstName1: [this.updateContact.firstName, Validators.required],
        lastName1: [this.updateContact.lastName, Validators.required],
        email1: [this.updateContact.email, [Validators.email, Validators.required]],
        phoneNumber1: [this.updateContact.phoneNo, Validators.required]
    })    
  }

  get firstname() {
    return this.updateForm.get('firstName1');
  }
 
  get lastname1() {
    return this.updateForm.get('lastName1');
  }

  get email1() {
    return this.updateForm.get('email1');
  }

  get phoneNumber1() {
    return this.updateForm.get('phoneNumber1');
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


  ngOnDestroy(){
    if(this.contactSubscription){
      this.contactSubscription.unsubscribe();
    }
  }

}
