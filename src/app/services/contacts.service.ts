import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  addContact(contact: Contact) {
    return this.http.post(`https://vue-completecourse.firebaseio.com/`, contact);
  }

}
