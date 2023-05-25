import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

const routes: Routes = [
  {path: 'users/createNew', component: AddUserComponent },
  {path: 'users/:userId/albums', component: UserAlbumsComponent},
  {path: 'users/:userId/albums/:albumId', component: AlbumPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
