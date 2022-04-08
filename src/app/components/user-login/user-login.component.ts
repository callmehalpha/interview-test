import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {JwtTokenService} from "../../services/jwt-token.service";
import {AuthStateService} from "../../services/auth-state.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  errors: any = null;
  private json: any;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: JwtTokenService,
    private authState: AuthStateService
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        if (!result.error) {
          this.responseHandler(result);
        }
        this.formatError(result.error);
      },
      (error) => {
        this.formatError(error.error);
      },
      () => {
        this.authState.setAuthState(true);
        this.loginForm.reset();
        this.router.navigate(['students']);
      }
    );
  }

  formatError(data: any) {
    let jsonToBeUsed: any = [];
    let item: any;
    let extracted;
    if (data.error) {
      extracted = data.error;
    } else {
      extracted = data;
    }
    console.log('error ',data,extracted)
    if (extracted.length < 8) {

      for (const res in extracted) {
        item = {};
        item.key = res;
        item.value = extracted[res];
        jsonToBeUsed.push(item);
      }
    } else {
      item = {};
      item.key = 'error';
      item.value = 'Unexpected server error encountered';
      jsonToBeUsed.push(item);
    }
    this.errors = jsonToBeUsed;
  }

  // Handle response
  responseHandler(data: any) {
    this.token.handleData(data.token);
  }
}
