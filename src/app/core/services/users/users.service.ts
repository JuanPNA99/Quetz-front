import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  URL_PATH: string = '/api/users/';
  constructor(private http: HttpClient) {}

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
}
