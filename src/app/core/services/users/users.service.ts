import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  URL_PATH: string = '/api/users/';
  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) return true;
    return false;
  }

  postLogin(formData: any) {
    return this.http.post<any>(
      environment.API_URL + this.URL_PATH + 'login/',
      formData
    );
  }

  postSignup(formData: any) {
    return this.http.post<any>(
      environment.API_URL + this.URL_PATH + 'signup/',
      formData
    );
  }

  logout() {
    return this.http.get<any>(environment.API_URL + this.URL_PATH + 'logout/');
  }
}
