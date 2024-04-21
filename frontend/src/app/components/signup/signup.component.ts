import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreBackendService } from 'src/app/services/core-backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signupForm: FormGroup;

  email: string = '';
  password: string = '';
  success: string = '';

  constructor(
    private coreBackendService: CoreBackendService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  async signup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    console.log(`Registering user with email: ${email} and password: ${password}`);
    const response = await this.coreBackendService.signup(email, password);    
    if(response)
      this.success = response;
  }

  async redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
