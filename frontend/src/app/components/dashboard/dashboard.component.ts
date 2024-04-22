import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  email: string = localStorage.getItem('email') || '';
  authToken: string = localStorage.getItem('authToken') || '';

}
