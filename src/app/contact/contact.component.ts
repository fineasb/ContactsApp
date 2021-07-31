import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Contact, ContactsState } from '../models/contacts.model';
import { getContacts } from '../store/selector';

import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { addContact, updateContact,deleteContact, searchContact} from '../store/action';
import { delay } from 'rxjs/operators';

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
  spinner2: any = true;
  searchText: string;

  contacts$: Observable<Contact[]>;
  best$: Observable<Contact[]>;
  contactSubscription: Subscription;

  constructor( private store: Store<ContactsState>, private fb:FormBuilder) { }

  ngOnInit(): void {

    this.contacts$ =  this.store.select(getContacts).pipe(delay(1500));
    this.spinner2 = this.store.select(getContacts);
    // this.contacts$.subscribe( () => {
    //   this.spinner2 = false
    // });

    this.addForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [ '', Validators.required],
      email: [ '', [Validators.email, Validators.required]],
      phoneNumber: [ '', Validators.required],
      favourite: ['']
    })

    this.updateForm = this.fb.group({
      firstName1: ['', Validators.required],
      lastName1: [ '', Validators.required],
      email1: [ '', [Validators.email, Validators.required]],
      phoneNumber1: [ '', Validators.required],
      favourite1: ['']
    })
   
  }

  get firstName() { return this.addForm.get('firstName'); }
  get lastName() { return this.addForm.get('lastName'); }
  get email() { return this.addForm.get('email'); }
  get phoneNumber() { return this.addForm.get('phoneNumber'); }

  get firstName1() { return this.updateForm.get('firstName1'); }
  get lastName1() { return this.updateForm.get('lastName1'); }
  get email1() { return this.updateForm.get('email1');}
  get phoneNumber1() { return this.updateForm.get('phoneNumber1'); }

  deleteContact(id: number) {
    if(confirm){
      this.store.dispatch(deleteContact({ id }));
    }
  }

  searchContact(search:string){
    this.store.dispatch(searchContact({ search }));
  }

  addContact(){
    const contact: Contact = {
      firstName: this.addForm.value.firstName,
      lastName: this.addForm.value.lastName,
      email: this.addForm.value.email,
      phoneNo: this.addForm.value.phoneNumber,
      favourite: this.addForm.value.favourite
    };
    this.spinner = true;
    setTimeout( () => { 
    if(this.addForm.invalid){
      return;
    }
    this.store.dispatch(addContact({ contact }));
    this.spinner = false;
    ($('#addModal') as any).modal('hide');
    this.addForm.reset();
     }, 900 );
  }

  editContact(contactId:any){
      this.contactSubscription = this.store.pipe(select((state: any) => state.contacts.contacts.find((post)=> post.id === contactId))).subscribe((data) => {
      this.updateContact = data;
      this.createForm();
   });
  }

  createForm() {

    this.updateForm = this.fb.group({
        firstName1: [this.updateContact.firstName, Validators.required],
        lastName1: [this.updateContact.lastName, Validators.required],
        email1: [this.updateContact.email, [Validators.email, Validators.required]],
        phoneNumber1: [this.updateContact.phoneNo, Validators.required],
        favourite1: [this.updateContact.favourite]
    })   
    
  }

  onUpdate(){
   
    const firstName = this.updateForm.value.firstName1;
    const lastName = this.updateForm.value.lastName1;
    const email = this.updateForm.value.email1;
    const phoneNo = this.updateForm.value.phoneNumber1;
    const favourite = this.updateForm.value.favourite1;
    
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
      if(!this.updateForm.valid){
        return;
      }
      this.store.dispatch(updateContact({ contact }));
      this.spinner = false;
      ($('#editModal') as any).modal('hide');
      this.addForm.reset();
       }, 900 );


  }

  ngOnDestroy(){
    if(this.contactSubscription){
      this.contactSubscription.unsubscribe();
    }
  }

}
