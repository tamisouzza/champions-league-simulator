import { Component, Inject } from '@angular/core';
import {AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoginResponse } from '../../models/auth.model';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private authService = Inject(AuthService);
  private router = Inject(Router);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])

  })
  
  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response: LoginResponse) => {
      console.log("Login successful", response);
      this.router.navigate(['/dashboard']);
    },
    error: (err: HttpErrorResponse) => {
      console.error('Login Failed', err.message);
      alert("Error connecting to the Champions League server!");
   }
      });
    }
  }
}
