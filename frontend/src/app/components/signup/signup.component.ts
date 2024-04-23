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
  success: string = '';

  constructor(
    private coreBackendService: CoreBackendService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      email: [''],
      password: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  async signup() {
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    const firstName = this.signupForm.value.firstName;
    const lastName = this.signupForm.value.lastName;
    console.log(`Registering user with email: ${email} and password: ${password}`);
    const response = await this.coreBackendService.signup(email, password, firstName, lastName);    
    if(response)
      this.success = response;
  }

  async redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
