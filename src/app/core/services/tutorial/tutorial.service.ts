import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TutorialService {
    URL_PATH: string = '/api/tutorials/';
    tutorialData!: any[];

    constructor(private http: HttpClient) {}

    getTutorials() {
        return this.http.get<any>(environment.API_URL + this.URL_PATH);
    }

    getTutorialByFilters(params: any) {
        return this.http.get<any>(environment.API_URL + this.URL_PATH, {
            params,
        });
    }

    getSpecificTutorial(id: number) {
        return this.http.get<any>(
            environment.API_URL + this.URL_PATH + `${id}`
        );
    }

    postTutorial(formData: any) {
        return this.http.post<any>(
            environment.API_URL + this.URL_PATH,
            formData
        );
    }

    emplumar(formData: any) {
        return this.http.post<any>(
            environment.API_URL + this.URL_PATH + 'feathers/emplumar/',
            formData
        );
    }

    desplumar(formData: any) {
        return this.http.post<any>(
            environment.API_URL + this.URL_PATH + 'feathers/desplumar/',
            formData
        );
    }
}
