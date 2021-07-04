import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { MatSidenavModule } from '@angular/material/sidenav';

import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutModule } from './shared/layout.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LayoutComponent } from './shared/layout.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    LayoutModule,
    MatSidenavModule,
    ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      { path:'', component: AuthenticationComponent, pathMatch: 'full'}     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
