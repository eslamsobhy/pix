import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';

const routes: Routes = [
  {path: 'users/:id/albums', component: UserAlbumsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
