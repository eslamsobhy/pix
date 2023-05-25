import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  private readonly Base_URL = "https://jsonplaceholder.typicode.com";

  constructor(private readonly myHttpClient:HttpClient) { }

  getAllUsers(){
    return this.myHttpClient.get(`${this.Base_URL}/users`);
  }
  getUserById(id:any){
    return this.myHttpClient.get(`${this.Base_URL}/users/${id}`);
  }
}
