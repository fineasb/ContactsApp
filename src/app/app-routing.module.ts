import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutComponent } from './shared/layout.component';


import { LayoutModule } from './shared/layout.module';

const routes: Routes = [
    { path:'', component: AuthenticationComponent, pathMatch: 'full'},
    { path: 'home', component: LayoutComponent,
    children: [
      { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule) },
              ] 
  }    
  
];

@NgModule({
  imports: [
    LayoutModule,
    AuthenticationModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
