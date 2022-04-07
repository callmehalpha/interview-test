import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

let baseUrl = '127.0.0.1:8000/api/auth'

export class User {
  email!: String;
  password!: String;
  password_confirmation!: String;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  register(user: User): Observable<any> {
    return this.http.post(`${baseUrl}/register`, user);
  }

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>(`${baseUrl}/login`, user);
  }

  // Access user profile
  profileUser(): Observable<any> {
    return this.http.get(`${baseUrl}/user-profile`);
  }
}
