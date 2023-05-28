import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './temp/header/header.component';
import { HomeComponent } from './temp/home/home.component';
import { UsersListComponent } from './temp/users-list/users-list.component';
import { AddUserComponent } from './temp/add-user/add-user.component';
import { AlbumCardComponent } from './temp/album-card/album-card.component';
import { UserAlbumsComponent } from './temp/user-albums/user-albums.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumPhotosComponent } from './temp/album-photos/album-photos.component';
import { PhotoCardComponent } from './temp/photo-card/photo-card.component';
import { UserHeaderComponent } from './temp/user-header/user-header.component';
import { LoginComponent } from './temp/login/login.component';
import { RegisterComponent } from './temp/register/register.component';
import { DeleteUserComponent } from './temp/delete-user/delete-user.component';
import { EditUserComponent } from './temp/edit-user/edit-user.component';
import { ErrorComponent } from './temp/error/error.component';


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
