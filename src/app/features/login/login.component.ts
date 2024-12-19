import {Component, ViewChild} from '@angular/core';
import {routeValues} from '../../constants/route-values';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {backendUrls} from '../../constants/backend-urls';
import {NgForm} from '@angular/forms';
import {StorageItem, StorageService} from '../utils/storage.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild('userLoginForm') form: NgForm | undefined;

  errorMessage: string = '';

  protected readonly routeValues = routeValues;

  constructor(private httpClient: HttpClient, private router: Router, private storageService: StorageService) {
  }

  loginUser() {
    if (!this.form) {
      return;
    }

    const userLoginRequest: UserLoginRequest = this.form.value as UserLoginRequest;

    this.httpClient.post<UserLoginResponse>(backendUrls.LOGIN_URL, userLoginRequest)
      .subscribe({
        next: successLoginResponse => {
          this.storageService.saveToStorage(successLoginResponse)
          this.router.navigate([routeValues.HEARTH]);
        },
        error: errorLoginResponse => {
          if (errorLoginResponse.status === 401) {
            this.errorMessage = 'Invalid username or password!'
          } else {
            this.errorMessage = 'Unknown error'; //TODO add an error message to response. But do not reveal technical stuff to user
          }
        }
      })
  }
}

interface UserLoginRequest {
  username: string;
  password: string;
}

interface UserLoginResponse extends StorageItem {
}
