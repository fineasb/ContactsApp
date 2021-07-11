import { ContactsState } from "../models/contacts.model";

export const initialState: ContactsState = {

    contacts:[
        {
            firstName: 'mihalache', 
            lastName: 'belciug', 
            address: 'emmaberindei@yahoo.com', 
            phoneNo: 760504498, 
            favourite: false
        },
        {
            firstName: 'aline', 
            lastName: 'catalizator', 
            address: 'ileanaberindei@yahoo.com', 
            phoneNo: 782736499, 
            favourite: false
        },
        {
            firstName: 'bulache', 
            lastName: 'mirand', 
            address: 'joshberindei@yahoo.com', 
            phoneNo: 782746388, 
            favourite: true
        },
        {
            firstName: 'Mihaela', 
            lastName: 'Carbasan', 
            address: 'jasonalicea@yahoo.com', 
            phoneNo: 792817333, 
            favourite: false
        },
        {
            firstName: 'hamster', 
            lastName: 'yulu', 
            address: 'karenelizabeth@yahoo.com', 
            phoneNo: 772638299, 
            favourite: true
        }
    ]
}