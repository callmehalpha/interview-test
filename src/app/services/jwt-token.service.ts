import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtTokenService {

  constructor() {
  }

  private issuer = {
    login: 'http://localhost:8002/api/auth/login',
    register: 'http://localhost:8002/api/auth/register',
  };

  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }

  getToken() {
    return localStorage.getItem('auth_token');
  }

  // Verify the token
  isValidToken() {
    const token = this.getToken();
    if (token && token !== "undefined") {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

  payload(token: any) {
    if (token != "undefined" && token && token.length > 0) {
      const jwtPayload = token.split('.')[1];
      return JSON.parse(atob(jwtPayload));
    }
  }

  // User state based on valid token
  isLoggedIn() {
    return this.isValidToken();
  }

  // Remove token
  removeToken() {
    localStorage.removeItem('auth_token');
  }
}
