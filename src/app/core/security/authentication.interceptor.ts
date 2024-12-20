import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth interceptor doing stuff attaching the jwt token')
    // Retrieve the JWT token (for demo purposes, hardcoding it)
    const jwtToken = 'my-auth-token';

    // Clone the request and add the Authorization header
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${jwtToken}`
      }
    });

    // Pass the modified request to the next handler
    return next.handle(clonedRequest);
  }
}
