import { Injectable } from '@angular/core';
import {localStorageKeys} from '../../constants/local-storage-keys';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private static readonly USER_DATA_KEY: string = "USER_DATA";

  constructor() { }

  saveToStorage(storageItem: StorageItem) {
    const storageItemCopy: StorageItem = {
      userId: storageItem.userId,
      jwtToken: storageItem.jwtToken
    };

    localStorage.setItem(StorageService.USER_DATA_KEY, JSON.stringify(storageItemCopy));
  }

  getUserId(): string {
    const userData = localStorage.getItem(StorageService.USER_DATA_KEY);
    if (userData) {
      const storageItem = JSON.parse(userData);
      return storageItem.userId;
    } else {
      return '';
    }
  }

  getJwtToken(): string {
    const userData = localStorage.getItem(StorageService.USER_DATA_KEY);
    if (userData) {
      const storageItem = JSON.parse(userData);
      return storageItem.jwtToken;
    } else {
      return '';
    }
  }
}

export interface StorageItem {
  userId: string;
  jwtToken: string;
}

