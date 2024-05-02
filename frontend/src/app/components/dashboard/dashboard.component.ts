import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreBackendService } from 'src/app/services/core-backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  email: string = localStorage.getItem('email') || '';
  authToken: string = localStorage.getItem('authToken') || '';
  language: any

  constructor(
    private router: Router,
    private coreBackendService: CoreBackendService
  ) {
    
  }

  ngOnInit() {
    this.loadUserDetail();
  }

  async loadUserDetail() {
    const response = await this.coreBackendService.getLanguagesByUser(this.authToken);
    console.log(response);
    this.language = response;
  }

  async redirectToProfile() {
    this.router.navigate(['/profile']);
  }

}
