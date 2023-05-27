import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},
  {path: 'users/add', component: AddUserComponent },
  {path: 'users/:userId/albums', component: UserAlbumsComponent},
  {path: 'users/:userId/albums/:albumId', component: AlbumPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
