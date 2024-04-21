import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoreBackendService {

  private coreServiceUrl;

  constructor() { 
    this.coreServiceUrl = environment.coreServiceUrl;
  }

  async signup(email: string, password: string) {
    const signupUrl = environment.signupUrl;
    const apiUrl = `${this.coreServiceUrl}${signupUrl}`;
    const axiosClient = await this.createAxiosClient(apiUrl);
    try {
      const data = {
        email,
        password
      }
      const response: any = await axiosClient.post('', data);
      return response.data.message;
    } catch (error) {
      return "";
    }
  }

  async login(email: string, password: string) {
    const loginUrl = environment.loginUrl;
    const apiUrl = `${this.coreServiceUrl}${loginUrl}`;
    const axiosClient = await this.createAxiosClient(apiUrl);
    try {
      const data = {
        email,
        password
      }
      const response: any = await axiosClient.post('', data);
      return response.data.message;
    } catch (error) {
      return "";
    }
  }

  async createAxiosClient(apiRoute: string, header?: string) {
    const httpClient = axios.create({
        baseURL: apiRoute,
        headers: { 
            "Content-Type": "application/json",
            "Authorization": header? header: ""
        },
    });
    return httpClient;
}
}
