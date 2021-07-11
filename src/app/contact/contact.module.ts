import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule } from '@angular/router';
import { RoPipe } from './ro.pipe';



@NgModule({
  declarations: [
    ContactComponent,
    RoPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path:'', component: ContactComponent }
    ])
  ]
})
export class ContactModule { }
