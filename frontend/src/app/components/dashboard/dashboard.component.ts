import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  email: string = localStorage.getItem('email') || '';
  authToken: string = localStorage.getItem('authToken') || '';

  constructor(
    private router: Router
  ) {
    
  }

  async redirectToProfile() {
    this.router.navigate(['/profile']);
  }

}
