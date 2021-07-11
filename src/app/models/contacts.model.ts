export interface Contact {
    firstName: string;
    lastName: string;
    address: string;
    phoneNo: number;
    favourite: boolean;
}

export interface ContactsState {
    contacts: Contact[];
}

