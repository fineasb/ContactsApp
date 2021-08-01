import { ContactsState } from "../models/contacts.model";

export const initialState: ContactsState = {

    contacts:[
        {
            id: 1,
            firstName: 'mihalache', 
            lastName: 'Mihailescu', 
            email: 'emmaberindei@yahoo.com', 
            phoneNo: 760504498, 
            favourite: true
        },
        {
            id: 2,
            firstName: 'i am the best programmer', 
            lastName: 'Hire me please', 
            email: 'ileanaberindei@yahoo.com', 
            phoneNo: 782736499, 
            favourite: false
        },
        {
            id: 3,
            firstName: 'Bulancea', 
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
            firstName: 'I will try my best in this team', 
            lastName: 'I promise', 
            email: 'karenelizabeth@yahoo.com', 
            phoneNo: 772638299, 
            favourite: false
        }
    ]
}