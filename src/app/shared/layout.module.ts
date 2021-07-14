import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule
  ]
})
export class LayoutModule { }
