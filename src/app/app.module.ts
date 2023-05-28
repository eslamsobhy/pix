import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AlbumCardComponent } from './components/album-card/album-card.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { PhotoCardComponent } from './components/photo-card/photo-card.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUserComponent,
    HeaderComponent,
    HomeComponent,
    AlbumCardComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
    PhotoCardComponent,
    UserHeaderComponent,
    UserAlbumsComponent,
    LoginComponent,
    RegisterComponent,
    DeleteUserComponent,
    EditUserComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
