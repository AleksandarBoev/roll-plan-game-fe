import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {backendUrls} from '../../constants/backend-urls';
import {localStorageKeys} from '../../constants/local-storage-keys';
import {Router} from '@angular/router';
import {routeValues} from '../../constants/route-values';
import {StorageItem, StorageService} from '../utils/storage.service';

@Component({
  selector: 'app-register',
  standalone: false,

  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @ViewChild('userRegistrationForm') form: NgForm | undefined;

  nameMinLength: string = '3';
  nameMaxLength: string = '20';
  errorMessage: string = '';
  passwordMinLength: string = '5';

  constructor(private httpClient: HttpClient, private router: Router, private storageService: StorageService) {
  }

  registerUser() {
    if (!this.form) {
      return;
    }

    if (!this.form.valid) {
      this.errorMessage = 'Please ensure all fields are valid before submitting.';
      return;
    }
    this.errorMessage = '';

    const userRegistrationRequest: UserRegistrationRequest = this.form.value as UserRegistrationRequest;

    this.httpClient.post<UserRegistrationResponse>(backendUrls.REGISTER_URL, userRegistrationRequest)
      .subscribe(userRegistrationResponse => {
        console.log('Saving to local storage via service')
        this.storageService.saveToStorage(userRegistrationResponse);
        this.router.navigate([ routeValues.HEARTH ]);
        //TODO handle errors from BE. For example non-unique name has been entered (http 4xx) or BE had a weird issue (5xx)
      })
  }

  private setDataToLocalStorage(userRegistrationResponse: UserRegistrationResponse) {
    localStorage.setItem(localStorageKeys.JWT_TOKEN, userRegistrationResponse.jwtToken);
    localStorage.setItem(localStorageKeys.USER_ID, userRegistrationResponse.userId);
  }

  protected readonly routeValues = routeValues;
}

interface UserRegistrationRequest {
  username: string;
  password: string;
}

interface UserRegistrationResponse extends StorageItem {
}
