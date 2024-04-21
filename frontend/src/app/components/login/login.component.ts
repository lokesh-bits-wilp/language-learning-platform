import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreBackendService } from 'src/app/services/core-backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  email: string = '';
  password: string = '';
  success: string = '';

  constructor(
    private coreBackendService: CoreBackendService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  async login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    console.log(`Logging in with email: ${email} and password: ${password}`);
    const response = await this.coreBackendService.login(email, password);
    if(response)
      this.router.navigate(['/dashboard']);
  }

  async redirectToSignup() {
    this.router.navigate(['/signup']);
  }
}
