import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    URL_PATH: string = '/api/themes/';
    constructor(private http: HttpClient) {}

    getThemes() {
        return this.http.get<any>(environment.API_URL + this.URL_PATH);
    }
}
