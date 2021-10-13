import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token');
    const urlArray = request.url.split('/');
    if (urlArray[urlArray.length - 2] !== 'login')
      request = request.clone({
        url: request.url,
        setHeaders: {
          Authorization: `Token ${authToken}`,
        },
      });
    return next.handle(request);
  }
}
