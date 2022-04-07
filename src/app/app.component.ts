import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthStateService} from "./services/auth-state.service";
import {JwtTokenService} from "./services/jwt-token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-interview';
  isSignedIn!: boolean;

  constructor(
    private auth: AuthStateService,
    public router: Router,
    public token: JwtTokenService) {
  }

  ngOnInit() {
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });
  }

  // Signout
  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }
}
