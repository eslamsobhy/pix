import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private readonly BASE_URL = "https://jsonplaceholder.typicode.com";

  constructor(private readonly Client: HttpClient) { }

  getUserAlbums(userId: number) {
    return this.Client.get(`${this.BASE_URL}/users/${userId}/albums`)
  }

  getAlbumPhotos(albumId: number) {
    return this.Client.get(`${this.BASE_URL}/photos?albumId=${albumId}`)
  }
}
