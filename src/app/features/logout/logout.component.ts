import {Component, OnInit} from '@angular/core';
import {StorageService} from '../utils/storage.service';
import {Router} from '@angular/router';
import {routeValues} from '../../constants/route-values';

@Component({
  selector: 'app-logout',
  standalone: false,
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {

  constructor(private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.storageService.clearStorage();
    this.router.navigate([routeValues.HEARTH]);
  }
}
