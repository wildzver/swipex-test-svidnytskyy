import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'users'
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
