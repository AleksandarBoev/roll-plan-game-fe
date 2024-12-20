import {environment} from '../../environments/environment';

export const backendUrls = {
  REGISTER_URL: environment.baseUrl + '/user/register',
  LOGIN_URL: environment.baseUrl + '/user/login',
  CHARACTER_URL: environment.baseUrl + '/character',
  CHARACTER_CREATE_URL: environment.baseUrl + '/character/create'
}
