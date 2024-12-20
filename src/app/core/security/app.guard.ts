import {CanActivateFn, Router} from '@angular/router';
import {StorageService} from '../../features/utils/storage.service';
import {inject} from '@angular/core';
import {routeValues} from '../../constants/route-values';

export const canActivateProtectedPage: CanActivateFn = () => {
  const storageService = inject(StorageService);
  if (storageService.isLoggedIn()) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate([routeValues.LOGIN]);
    return false;
  }
};
