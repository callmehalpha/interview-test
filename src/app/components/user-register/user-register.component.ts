import {Component,  OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup;
  errors: any = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: [''],
      password: [''],
      password_confirmation: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        this.errors = error.error;
      },
      () => {
        this.registerForm.reset();
        this.router.navigate(['login']);
      }
    );
  }
}
