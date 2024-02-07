import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { MenuComponent } from './menu/menu.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTypesComponent } from './user-types/user-types.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'addUser/:cardId', component: AddUserComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'userTypes', component: UserTypesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
