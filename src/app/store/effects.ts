import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ContactsService } from "../services/contacts.service";
import { addContact } from "./action";
import { map, mergeMap } from "rxjs/operators";

@Injectable()
export class ContactsEffects {
    constructor(private actions$: Actions, private contactsService: ContactsService){}

    addContact$ = createEffect( () => {
        return this.actions$.pipe(
            ofType(addContact),
            mergeMap((action) => {
                return this.contactsService.addContact(action.contact).pipe(
                    map((data) => {
                        console.log(data);
                    })
                );
            })
        );
    },
    { dispatch: false}
    );
}