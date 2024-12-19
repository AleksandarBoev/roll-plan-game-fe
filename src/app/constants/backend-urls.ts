import {environment} from '../../environments/environment';

export const backendUrls = {
  REGISTER_URL: environment.baseUrl + '/user/register',
  LOGIN_URL: environment.baseUrl + '/user/login'
}
