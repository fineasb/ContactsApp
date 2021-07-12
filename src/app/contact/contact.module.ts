import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { RoPipe } from './ro.pipe';


import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContactComponent,
    RoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild([
      { path:'', component: ContactComponent }
    ])
  ]
})
export class ContactModule { }
