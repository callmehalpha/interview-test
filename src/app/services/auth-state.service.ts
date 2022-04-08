import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {JwtTokenService} from "./jwt-token.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn()!);
  userAuthState = this.userState.asObservable();

  constructor(public token: JwtTokenService, private router: Router) {
  }

  setAuthState(value: boolean) {
    this.userState.next(value);
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userAuthState) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
