import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreBackendService } from 'src/app/services/core-backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup;
  email: string = localStorage.getItem('email') || '';
  authToken: string = localStorage.getItem('authToken') || '';
  success: string = '';

  constructor(
    private coreBackendService: CoreBackendService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.profileForm = this.formBuilder.group({
      email: [''],
      firstName: [''],
      lastName: [''],
    });
  }

  ngOnInit() {
    this.loadUserDetail();
  }

  async loadUserDetail() {
    const response = await this.coreBackendService.getUserDetail(this.authToken);
    console.log(response);
    
    this.profileForm = this.formBuilder.group({
      email: [this.email],
      firstName: [response.data.firstName],
      lastName: [response.data.lastName],
    });
  }

  async profile() {
    const email = this.profileForm.value.email;
    const firstName = this.profileForm.value.firstName;
    const lastName = this.profileForm.value.lastName;
    // const response = await this.coreBackendService.getUserDetail(email);
    // if(response)
        this.success = "Up"
    }

  async redirectToDashboard() {
    this.router.navigate(['/dashboard']);
  }

}
