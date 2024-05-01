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

  async signup(email: string, password: string, firstName: string, lastName: string) {
    const signupUrl = environment.signupUrl;
    const apiUrl = `${this.coreServiceUrl}${signupUrl}`;
    const axiosClient = await this.createAxiosClient(apiUrl);
    try {
      const data = {
        email,
        password,
        firstName,
        lastName
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
      return response.data;
    } catch (error) {
      return "";
    }
  }

  async getUserDetail(authToken: string) {
    const userUrl = environment.userUrl;
    const apiUrl = `${this.coreServiceUrl}${userUrl}`;
    const axiosClient = await this.createAxiosClient(apiUrl, authToken);
    try {
      const response: any = await axiosClient.get('');
      return response.data;
    } catch (error) {
      return "";
    }
  }

  async updateProfile(authToken: string, firstName: string, lastName: string) {
    const updateProfileUrl = environment.updateProfileUrl;
    const apiUrl = `${this.coreServiceUrl}${updateProfileUrl}`;
    const axiosClient = await this.createAxiosClient(apiUrl, authToken);
    try {
      const data = {
        firstName,
        lastName
      }
      const response: any = await axiosClient.put('', data);
      return response.data.message;
    } catch (error) {
      return "";
    }
  }

  async getLanguages(authToken: string) {
    const updateProfileUrl = environment.updateProfileUrl;
    const apiUrl = `${this.coreServiceUrl}${updateProfileUrl}`;
    const axiosClient = await this.createAxiosClient(apiUrl, authToken);
    try {
      const response: any = await axiosClient.get('');
      return response.data;
    } catch (error) {
      return "";
    }
  }

  async createAxiosClient(apiRoute: string, header?: string) {
    const httpClient = axios.create({
        baseURL: apiRoute,
        headers: { 
            "Content-Type": "application/json",
            "Authorization": header ? `Bearer ${header}` : ""
        },
    });
    return httpClient;
  }
}
