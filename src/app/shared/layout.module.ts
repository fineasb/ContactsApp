import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
    { path: 'home', component: LayoutComponent,
    children: [
      { path: 'contact', loadChildren: () => import('../contact/contact.module').then(m => m.ContactModule) },
      { path: 'favorite', loadChildren: () => import('../favorite/favorite.module').then(m => m.FavoriteModule) },
    ] 
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ]
})
export class LayoutModule { }
