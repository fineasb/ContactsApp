import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { RoPipe } from './ro.pipe';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FavoriteComponent,
    RoPipe
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule, FormsModule,
    RouterModule.forChild([
      { path:'', component: FavoriteComponent }
    ])
  ]
})
export class FavoriteModule { }
