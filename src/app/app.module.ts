import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationModule } from './authentication/authentication.module';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    ReactiveFormsModule, FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      { path:'', component: AuthenticationComponent, pathMatch: 'full'},
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
