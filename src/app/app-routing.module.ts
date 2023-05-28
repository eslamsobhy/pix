import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './temp/add-user/add-user.component';
import { UserAlbumsComponent } from './temp/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './temp/album-photos/album-photos.component';
import { HomeComponent } from './temp/home/home.component';
import { UsersListComponent } from './temp/users-list/users-list.component';
import { LoginComponent } from './temp/login/login.component';
import { RegisterComponent } from './temp/register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { ErrorComponent } from './temp/error/error.component';
import { LoginGuard } from './auth/login.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersListComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'signup', component: RegisterComponent, canActivate: [LoginGuard]},
  {path: 'users/add', component: AddUserComponent, canActivate: [AuthGuard]},
  {path: 'users/:userId/albums', component: UserAlbumsComponent, canActivate: [AuthGuard]},
  {path: 'users/:userId/albums/:albumId', component: AlbumPhotosComponent, canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
