import { ContactsState } from "../models/contacts.model";

export const initialState: ContactsState = {

    contacts:[
        {
            id: 1,
            firstName: 'mihalache', 
            lastName: 'belciug', 
            email: 'emmaberindei@yahoo.com', 
            phoneNo: 760504498, 
            favourite: false
        },
        {
            id: 2,
            firstName: 'aline', 
            lastName: 'catalizator', 
            email: 'ileanaberindei@yahoo.com', 
            phoneNo: 782736499, 
            favourite: false
        },
        {
            id: 3,
            firstName: 'bulache', 
            lastName: 'mirand', 
            email: 'joshberindei@yahoo.com', 
            phoneNo: 782746388, 
            favourite: true
        },
        {
            id: 4,
            firstName: 'Mihaela', 
            lastName: 'Carbasan', 
            email: 'jasonalicea@yahoo.com', 
            phoneNo: 792817333, 
            favourite: false
        },
        {
            id: 5,
            firstName: 'hamster', 
            lastName: 'yulu', 
            email: 'karenelizabeth@yahoo.com', 
            phoneNo: 772638299, 
            favourite: true
        }
    ]
}