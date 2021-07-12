export interface Contact {
    id?:number;
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: number;
    favourite?: boolean;
}

export interface ContactsState {
    contacts: Contact[];
}

