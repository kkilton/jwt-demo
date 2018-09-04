import { Injectable } from '@angular/core';
import { JwtHelper } from '../helpers/JwtHelper';

@Injectable()
export class AuthService {

  constructor() { }

  isAuthenticated(): any {
    let user = this.currentUser;
    return user && user.firstName !== undefined;
  }

  get currentUser() {
    let token = sessionStorage.getItem('token');
    if (token) {
      let decodedToken = new JwtHelper().decodeToken(token);
      if (decodedToken) {
        return decodedToken;
      }
    }

    return null;
  }
}
