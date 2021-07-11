import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contact, ContactsState } from '../models/contacts.model';
import { getContacts } from '../store/selector';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contacts$: Observable<Contact[]>;

  constructor(private store: Store<ContactsState>) { }

  ngOnInit(): void {

    this.contacts$ = this.store.select(getContacts);
    
  }

}
