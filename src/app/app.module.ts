import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { sharedReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './store/effects';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({contacts: sharedReducer}),
    EffectsModule.forRoot([ContactsEffects]),
    MatSidenavModule,
    ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ContactsEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
