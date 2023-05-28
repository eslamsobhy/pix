import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';


interface User {
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  users: User[] = [
    {
      email: 'admin@gmail.com',
      password: 'admin1234',
      role: 'admin'
    },
    {
      email: 'user@gmail.com',
      password: 'user1234',
      role: 'user'
    }
  ]

  getLoggedToken() {
    return localStorage.getItem('loggedToken');
  }

  getRoleToken() {
    return localStorage.getItem('roleToken');
  }

  setToken(loggedToken: string, roleToken: string) {
    localStorage.setItem('loggedToken', loggedToken);
    localStorage.setItem('roleToken', roleToken);
  }
}
