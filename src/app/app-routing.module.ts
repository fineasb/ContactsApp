import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { LayoutComponent } from './shared/layout.component';


import { SharedModule } from './shared/shared.module';

const routes: Routes = [
    { path:'', component: AuthenticationComponent, pathMatch: 'full'},
    { path: 'dashboard', component: LayoutComponent,
        children: [
           { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
           { path: 'favorite', loadChildren: () => import('./favorite/favorite.module').then(m => m.FavoriteModule) },
                  ] 
    }
];

@NgModule({
  imports: [
    SharedModule,
    AuthenticationModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
