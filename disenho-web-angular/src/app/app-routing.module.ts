import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { USER, USERS, USER_ADD, USER_EDIT } from './constants';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';

const routes: Routes = [
  { path: USERS, component: UserListComponent },
  { path: USER_ADD, component: UserFormComponent },
  { path: `${USER}/:id`, component: UserDetailComponent },
  { path: `${USER_EDIT}/:id`, component: UserFormComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, // Ruta para manejar errores 404
  { path: 'server-error', component: InternalServerErrorComponent }, // Ruta para manejar errores 500
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
