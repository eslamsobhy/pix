import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './Components/add-user/add-user.component';
import { UserAlbumsComponent } from './Components/user-albums/user-albums.component';

const routes: Routes = [
  {path: 'users/createNew', component: AddUserComponent },
  {path: 'users/:id/albums', component: UserAlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
