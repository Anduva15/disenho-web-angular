import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';


const routes: Routes = [
  { path: 'userList', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'newUser', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  // You can add more routes here
  { path: '', redirectTo: '/users', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { 
 
}
