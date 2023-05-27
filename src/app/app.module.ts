import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { AlbumCardComponent } from './Components/album-card/album-card.component';
import { UserAlbumsComponent } from './components/user-albums/user-albums.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import { PhotoCardComponent } from './Components/photo-card/photo-card.component';
import { UserHeaderComponent } from './Components/user-header/user-header.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DeleteUserComponent } from './Components/delete-user/delete-user.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
