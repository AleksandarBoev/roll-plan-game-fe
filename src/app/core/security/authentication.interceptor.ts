import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {StorageService} from '../../features/utils/storage.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Auth interceptor doing stuff attaching the jwt token')
    if (this.storageService.isLoggedIn()) {
      const jwtToken = this.storageService.getJwtToken();
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });

      return next.handle(clonedRequest);
    } else {
      return next.handle(req);
    }
  }
}
