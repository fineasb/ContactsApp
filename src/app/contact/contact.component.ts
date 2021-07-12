import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact, ContactsState } from '../models/contacts.model';
import { getContacts } from '../store/selector';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { addContact } from '../store/action';
import { deleteContact } from '../store/action';

declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  addForm: FormGroup;
  spinner: boolean = false;

  contacts$: Observable<Contact[]>;

  constructor(private store: Store<ContactsState>, private fb:FormBuilder) { }

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
    this.store.dispatch(deleteContact({ id }));
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

}
